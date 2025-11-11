import axios from 'axios';
import { Food } from './types';

const api = axios.create({
  baseURL: 'https://6852821e0594059b23cdd834.mockapi.io/',
});

export const getFoods = async (search?: string): Promise<Food[]> => {
  const url = search ? `/Food?name=${search}` : '/Food';
  const res = await api.get(url);
  return res.data;
};