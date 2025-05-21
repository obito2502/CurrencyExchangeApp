import request from '../axios';
import currencies from '../../constData/currencies.json';

class CurrencyRequests {
  static async getCurrenciesList() {
    const { data } = await request.get('/currencies');

    return currencies.filter((c) => Object.keys(data).includes(c.code));
  }

  static async getConvertedValue(from: string, to: string, amount: string) {
    const { data } = await request.get(`/convert?from=${from}&to=${to}&amount=${amount}`);
    return Math.round(data.result);
  }
}

export default CurrencyRequests;
