/* eslint-disable no-console */
import axios, { AxiosError, AxiosResponse } from 'axios';
import networkConfig from './networkConfig';

const request = axios.create({
  baseURL: networkConfig.apiUrl,
});

request.interceptors.request.use(
  async (config) => {
    return Promise.resolve(config);
  },
  (error: AxiosError) => {
    console.error(`Error in request ${JSON.stringify(error.config)}: ${error}`);

    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (res: AxiosResponse<unknown>) => {
    return Promise.resolve(res);
  },
  (error) => {
    console.error(`Error in response for request ${JSON.stringify(error)}: ${error}`);

    return Promise.reject(error);
  }
);

export default request;
