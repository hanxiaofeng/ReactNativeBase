import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import axios from 'axios';
interface AxiosTokenInstance extends AxiosInstance {}
// 创建一个axios实例
const instance: AxiosTokenInstance = axios.create({
  baseURL: '/',
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

const {request, get, post} = instance;
//暴露axios实例
export {request, get, post, instance};
