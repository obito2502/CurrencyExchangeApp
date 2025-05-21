export interface CurrencyType {
  name: string;
  symbol: string;
  code: string;
  flagSrc: string;
}

export interface ErrorType {
  errorCode: number;
  errorMessage: string;
  resetFunction: () => void;
}

export interface HeaderType {
  title: string;
  goBack: () => void | undefined;
}

export type CurrencyChosenType = 'from' | 'to';
