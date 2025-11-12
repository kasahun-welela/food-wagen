"use client";
import FoodCard from "@/components/FoodCard";
import { useQuery } from "@tanstack/react-query";
import { getFoods } from "@/lib/api";
import { useEffect, useState } from "react";
import LoadingCard from "@/components/LoadingCard";
import HeroSection from "@/components/Hero";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => setMounted(true), []);
  const {
    data: foods,
    isLoading,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["foods", searchTerm],
    queryFn: () => getFoods(searchTerm),
  });

  return (
    <>
      <HeroSection onSearch={setSearchTerm} />
      <main className="container mx-auto px-6 py-12">
        {!mounted ? null : (
          <>
            {(isLoading || isPending) && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <LoadingCard key={i} />
                ))}
              </div>
            )}

            {isError && (
              <div className="text-center text-2xl font-bold">
                Error:{" "}
                {error instanceof Error ? error.message : "Failed to load"}
              </div>
            )}

            {!isLoading && !isPending && !isError && foods && (
              <>
                <h1 className="text-2xl font-bold mb-6 text-center">
                  Featured Meals
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {foods.map((food) => (
                    <FoodCard
                      key={food.id}
                      imageUrl={food.image}
                      price={food.price}
                      name={food.name}
                      rating={food.rating}
                      status={food.status}
                      logo={food.logo}
                      id={food.id}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </main>
    </>
  );
}
