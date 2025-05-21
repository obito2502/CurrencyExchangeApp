import React from 'react';
import CurrencyStore from './stores/CurrencyStore';

class RootStore {
  currencyStore: CurrencyStore;

  constructor() {
    this.currencyStore = new CurrencyStore();

    this.currencyStore.init();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
