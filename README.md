This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# 📱 Currency Exchange App — Architecture & Performance Guide

A concise, developer-oriented overview of how the project is laid out and which optimizations are in place.

---

## 📂 Top-Level Structure

src/
│
├─ assets/ # fonts, icons, images
├─ components/ # shared & feature-specific UI
├─ constData/ # static JSON (e.g. currency list)
├─ enum/ # app-wide enums (screens, stacks, …)
├─ navigation/ # every navigator lives here
├─ network/ # Axios config + per-endpoint files
├─ provider/ # design-system tokens (colors, fonts)
├─ screens/ # screen components, grouped by flow
├─ store/ # MobX stores (CurrencyStore, …)
├─ types/ # global and navigation TS types
└─ utils/ # helpers for adaptive layouts, etc.

| Rule                         | Explanation                                                                                                                                                                                   |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **All code lives in `src/`** | Keeps repo root clean.                                                                                                                                                                        |
| **Assets**                   | Every font, icon and image is stored under `assets/`.                                                                                                                                         |
| **Components**               | _Common_ UI (e.g. `Text`, `TextInput`) in the root of `components/`. Components used only in a specific flow (e.g. `CurrencyButton`) go into a dedicated sub-folder (`components/Currency/`). |
| **Static data**              | Constant lists such as currencies in `constData/`.                                                                                                                                            |
| **Enums**                    | Single source of truth for screen / stack names.                                                                                                                                              |
| **Navigation**               | Root navigator + any Bottom-Tab / Drawer / Stack navigators and their type defs.                                                                                                              |
| **Network**                  | `axios.ts` for configuration, `requests/` for one-file-per-endpoint functions.                                                                                                                |
| **Provider**                 | Centralised colors, fonts, spacing — makes themable UI easy.                                                                                                                                  |
| **Screens**                  | Each screen is a React component; large feature flows get their own sub-directory.                                                                                                            |
| **Store**                    | MobX for state management. `CurrencyStore` owns API calls, data shaping and error handling.                                                                                                   |
| **Types**                    | All shared TypeScript types, including navigation params.                                                                                                                                     |
| **Utils**                    | Helper functions (e.g. `resizeHelper`) that ensure consistent layout on every device.                                                                                                         |

---

## ⚙️ State Management (MobX)

- One store per flow; currently **`CurrencyStore`**  
  – calls request functions from `network/requests`  
  – transforms / caches data  
  – exposes observable state to UI
- Components consume stores via `useRootStore()` and are wrapped with `observer`.

---

## 🌐 Networking Layer

| File/Folder         | Purpose                                                           |
| ------------------- | ----------------------------------------------------------------- |
| `network/axios.ts`  | Creates an Axios instance, sets base URL, timeouts, interceptors. |
| `network/requests/` | Pure, one-endpoint = one-file functions returning typed promises. |

---

## 🚀 Performance Optimisations

- **Debounced API calls**  
  `lodash.debounce` waits **200 ms** after user stops typing in `AmountInput` before fetching rates → prevents a flood of requests.

- **`React.memo` on list rows**  
  `CurrencyListItem` re-renders only if its own props change, not when another list item updates.

- **Adaptive Sizing**  
  `utils/resizeHelper` converts design pixels to device units, keeping the layout visually identical across screen sizes and resolutions.

---

## 🎨 Theme & Style Tokens

All colour palettes and font families live in `provider/`.  
Switching to dark mode or adding a new font requires changes in exactly one place.

---

## 🧭 Navigation

- Root navigator exported from `navigation/index.tsx`.
- Additional groups (Bottom Tab, Drawer, etc.) get their own files in `navigation/`.
- Enum names come from `enum/SCREENS.ts`; navigation types are in `types/NavigationTypes.ts`.

---

## 🛠️ Extending the Project

1. **New flow** → add a sub-folder in `screens/`, create matching store & components sub-folder.
2. **New endpoint** → add a file under `network/requests/` and a method in the relevant store.
3. **New screen** → add to `enum/SCREENS.ts`, import it in the appropriate navigator.

---

## ▶️ Quick Start

```bash
yarn install         # or npm ci
yarn start           # run on simulator / device
```
