import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';

type FeedbackData = {
  phone: string;
  name: string;
};

type FeedbackResponseData = {
  id: number;
  created_at: string;
};

type ApiResponse = {
  message: string;
  data?: FeedbackResponseData;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse | string>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { phone, name }: FeedbackData = req.body;

  if (!phone || !name) {
    return res.status(400).json({ message: 'Phone and name are required' });
  }

  const backendUrl = process.env.DJANGO_API_URL;
  if (!backendUrl || typeof backendUrl !== 'string') {
    return res.status(500).send(`
      <h1>Configuration Error</h1>
      <p>DJANGO_API_URL is not defined or is not a valid string in environment variables.</p>
    `);
  }

  try {
    const response = await axios.post(backendUrl, { phone, name }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.status(200).json({ message: 'Data submitted successfully', data: response.data.data });
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Error submitting to backend:', axiosError.response?.data || axiosError.message);
    return res.status(500).send(`
      <h1>Server Error</h1>
      <p>Failed to submit data to backend. Check logs for details.</p>
    `);
  }
}