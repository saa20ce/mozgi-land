import axios, { AxiosResponse, AxiosInstance } from 'axios';

interface QuestionApiData {
  id: number;
  title: string;
  description: string | null;
}

interface WorkApiData {
  id: number;
  title: string;
  description: string | null;
  type: string;
  thumbnail: string | null;
}

interface ServiceApiData {
  id: number;
  title: string;
  items: string[] | null;
}



const API_URL = 'http://127.0.0.1:8000/api/';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getQuestions = async (): Promise<QuestionApiData[]> => {
  const response: AxiosResponse<QuestionApiData[]> = await api.get('questions/');
  return response.data;
};

export const getWorks = async (): Promise<WorkApiData[]> => {
  const response: AxiosResponse<WorkApiData[]> = await api.get('works/');
  return response.data;
};

export const getServices = async (): Promise<ServiceApiData[]> => {
  const response: AxiosResponse<ServiceApiData[]> = await api.get('services/');
  return response.data;
};

export default api;