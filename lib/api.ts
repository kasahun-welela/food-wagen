import axios from 'axios';
import { CreateFood, Food } from './types';

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

  export const getFoodById = async (id: string) => {
    const res = await api.get(`/Food/${id}`);
    return res.data
  };
  
  export const updateFood = async (id: string, data: any) => {
    const res = await api.put(`/Food/${id}`, data);
    return res.data;
  };
  

  export const createFood = async (food: CreateFood): Promise<Food> => {
    const res = await api.post('/Food', food);
    return res.data;
    };
  