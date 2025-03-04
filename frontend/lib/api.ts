import axios, { AxiosResponse, AxiosInstance } from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getQuestions = async (): Promise<any[]> => {
  const response: AxiosResponse<any[]> = await api.get('questions/');
  return response.data;
};

export const getWorks = async (): Promise<any[]> => {
  const response: AxiosResponse<any[]> = await api.get('works/');
  return response.data;
};

export const getServices = async (): Promise<any[]> => {
  const response: AxiosResponse<any[]> = await api.get('services/');
  return response.data;
};

export default api;