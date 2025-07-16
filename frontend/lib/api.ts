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
	images: Images[];
}

interface Images {
	id: number;
	image: string;
}

interface ServiceApiData {
	id: number;
	title: string;
	items: Category[];
}

interface Category {
	title: string;
	items: string[];
}

const API_URL = 'http://127.0.0.1:8000/api/';

const api: AxiosInstance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getQuestions = async (lang = 'ru'): Promise<QuestionApiData[]> => {
	const response: AxiosResponse<QuestionApiData[]> = await api.get(
		'questions/',
		{
			params: { lang },
		},
	);
	return response.data;
};

export const getWorks = async (lang = 'ru'): Promise<WorkApiData[]> => {
	const response: AxiosResponse<WorkApiData[]> = await api.get('works/', {
		params: { lang },
	});
	return response.data;
};

export const getServices = async (lang = 'ru'): Promise<ServiceApiData[]> => {
	const response: AxiosResponse<ServiceApiData[]> = await api.get(
		'services/',
		{
			params: { lang },
		},
	);
	return response.data;
};

export default api;
