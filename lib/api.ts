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
    const res = await fetch(`/api/Food/${id}`);
    if (!res.ok) throw new Error("Failed to fetch food");
    return res.json();
  };
  
  export const updateFood = async (id: string, data: any) => {
    const res = await fetch(`/api/Food/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to update food");
    return res.json();
  };

  export const createFood = async (food: CreateFood): Promise<Food> => {
    const res = await api.post('/Food', food);
    return res.data;
    };
  