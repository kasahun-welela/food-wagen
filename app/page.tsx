'use client'
import FoodCard from "@/components/FoodCard";
import { FoodStatus } from "@/lib/types";
import { useQuery } from '@tanstack/react-query';
import { getFoods } from '@/lib/api';
import { useEffect, useState } from "react";

export default function Home() {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { data: foods, isLoading, isError, error } = useQuery({
    queryKey: ['foods'],
    queryFn: () => getFoods(),
  });

  if (!mounted) {
    return <main className="container mx-auto px-6 py-12" suppressHydrationWarning />;
  }

  if (isLoading) return <div className="text-center text-2xl font-bold">Loading...</div>;
  if (isError) {
    const message = error instanceof Error ? error.message : 'Failed to load';
    return <div className="text-center text-2xl font-bold">Error: {message}</div>;
  }


  return (
     <main className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6 text-center">Featured Meals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {foods?.map((food) => (
        <FoodCard key={food.name} imageUrl={food.image} price={food.price} name={food.name} rating={food.rating} status={food.status} logo={food.logo} />
      ))}
      </div>
     </main>
  );
}
