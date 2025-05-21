import { makeAutoObservable } from 'mobx';
import { CurrencyType, ErrorType } from '../../types/MainTypes';
import CurrencyRequests from '../../network/requests/CurrencyRequests';
import currencies from '../../constData/currencies.json';

class CurrencyStore {
  public currenciesList: CurrencyType[] = [];

  public fromCurrency: CurrencyType = currencies[0];

  public toCurrency: CurrencyType = currencies[1];

  public loader: boolean = false;

  public errorResponse: ErrorType | null = null;

  public convertLoader: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  init = () => {
    this.getCurrencyList();
  };

  getCurrencyList = async () => {
    this.setLoader(true);
    await CurrencyRequests.getCurrenciesList()
      .then((res) => {
        this.setCurrenciesList(res);
        this.setFromCurrency(res[0]);
        this.setToCurrency(res[1]);
      })
      .catch((err) => {
        this.setErrorResponse({
          errorCode: err.status,
          errorMessage: err.message,
          resetFunction: () => this.getCurrencyList(),
        });
      })
      .finally(() => this.setLoader(false));
  };

  getConvertedValue = async (amount: string) => {
    try {
      if (this.fromCurrency && this.toCurrency) {
        this.setConvertLoader(true);
        return await CurrencyRequests.getConvertedValue(
          this.fromCurrency?.code,
          this.toCurrency?.code,
          amount
        ).finally(() => this.setConvertLoader(false));
      }

      return 0;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      this.setErrorResponse({
        errorCode: err.status,
        errorMessage: err.message,
        resetFunction: () => this.getConvertedValue('0'),
      });
      return 0;
    }
  };

  currencyExchange = () => {
    if (this.fromCurrency && this.toCurrency) {
      const copyCurrency = this.toCurrency;
      this.setToCurrency(this.fromCurrency);
      this.setFromCurrency(copyCurrency);
    }
  };

  setConvertLoader(item: boolean) {
    this.convertLoader = item;
  }

  setCurrenciesList(item: CurrencyType[]) {
    this.currenciesList = [...item];
  }

  setFromCurrency(item: CurrencyType) {
    this.fromCurrency = item;
  }

  setToCurrency(item: CurrencyType) {
    this.toCurrency = item;
  }

  setLoader(item: boolean) {
    this.loader = item;
  }

  setErrorResponse(item: ErrorType) {
    this.errorResponse = item;
  }

  isCurrencyChosen(type: 'from' | 'to', item: CurrencyType) {
    if (type === 'from') {
      return this.fromCurrency?.code === item.code;
    }

    return this.toCurrency?.code === item.code;
  }

  resetErrorResponse() {
    this.errorResponse?.resetFunction();
    this.errorResponse = null;
  }
}

export default CurrencyStore;
