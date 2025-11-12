"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMotorcycle,
  faBagShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { HeroSectionProps } from "@/lib/types";

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [option, setOption] = useState("delivery");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section className="bg-orange-500 text-white  relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-3">
        {/* Left content */}
        <div className="text-center md:text-left max-w-2xl space-y-6 md:basis-3/4 pt-16 md:pt-24">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Are you starving?
          </h1>
          <p className="text-white/90 text-lg">
            Within a few clicks, find meals that are accessible near you{" "}
          </p>

          <div className="bg-white rounded-xl shadow-lg p-4 mt-6 text-gray-700">
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setOption("delivery")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                  option === "delivery"
                    ? "bg-orange-100 text-orange-600"
                    : "text-gray-500 hover:text-orange-600"
                }`}
              >
                <FontAwesomeIcon icon={faMotorcycle} />
                Delivery
              </button>

              <button
                onClick={() => setOption("pickup")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                  option === "pickup"
                    ? "bg-orange-100 text-orange-600"
                    : "text-gray-500 hover:text-orange-600"
                }`}
              >
                <FontAwesomeIcon icon={faBagShopping} />
                Pickup
              </button>
            </div>

            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row gap-3 md:gap-4"
            >
              <div className="relative flex-1 min-w-[260px] md:min-w-[420px]">
                {/* Search icon */}
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-orange-500"
                  />
                </span>

                <input
                  id="search"
                  type="text"
                  placeholder="What do you like to eat today?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-sm bg-gray-100 rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Find Meal
              </button>
            </form>
          </div>
        </div>

        <div className="pt-16 -mb-5 ">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl ">
            <Image
              src="/images/food-image.png"
              alt="Delicious food"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
