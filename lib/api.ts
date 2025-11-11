import axios from 'axios';
import { Food } from './types';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const getFoods = async (search?: string): Promise<Food[]> => {
  const url = search ? `/Food?name=${search}` : '/Food';
  const res = await api.get(url);
  return res.data;
};
export const deleteFood = async (id: string): Promise<void> => {
  await api.delete(`/Food/${id}`);
  };