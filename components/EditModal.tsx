"use client";

import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFoodById, updateFood } from "@/lib/api";
import { EditFoodModalProps } from "@/lib/types";
import { mealSchema } from "@/lib/ValidationSchema";

export default function EditFoodModal({
  isOpen,
  onClose,
  foodId,
}: EditFoodModalProps) {
  const queryClient = useQueryClient();

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  // State for form data and validation errors
  const [formData, setFormData] = useState({
    food_name: "",
    food_rating: "",
    food_image: "",
    restaurant_name: "",
    restaurant_logo: "",
    restaurant_status: "Open Now",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const {
    data: foodData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["food", foodId],
    queryFn: () => getFoodById(foodId as string),
    enabled: !!foodId && isOpen,
  });

  console.log("food data", foodData);

  useEffect(() => {
    if (foodData) {
      setFormData({
        food_name: foodData.food_name || "",
        food_rating: foodData.food_rating?.toString() || "",
        food_image: foodData.food_image || "",
        restaurant_name: foodData.restaurant_name || "",
        restaurant_logo: foodData.restaurant_logo || "",
        restaurant_status: foodData.restaurant_status || "Open Now",
      });
    }
  }, [foodData]);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: typeof formData) =>
      updateFood(foodId as string, {
        ...data,
        food_rating: Number(data.food_rating),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foods"] });
      onClose();
    },
  });

  const validateAll = (data: typeof formData) => {
    const parsedData = { ...data, food_rating: Number(data.food_rating) };
    const result = mealSchema.safeParse(parsedData);
    if (!result.success) {
      const formatted: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (field) formatted[field as string] = issue.message;
      });
      setErrors(formatted);
      return false;
    } else {
      setErrors({});
      return true;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
    validateAll(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAll(formData)) {
      await mutateAsync(formData);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white rounded-xl p-6 text-center shadow">
          <p className="text-gray-700 font-medium">Loading food data...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white rounded-xl p-6 text-center shadow">
          <p className="text-red-500 font-semibold">
            Failed to load food details.
          </p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:opacity-90"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-center text-2xl font-semibold text-orange-500 mb-6">
          Edit Meal
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Food Name */}
          <div>
            <input
              name="food_name"
              value={formData.food_name}
              onChange={handleChange}
              placeholder="Food name"
              className="food-input"
              disabled={isPending}
            />
            {errors.food_name && (
              <p className="text-red-500 text-sm mt-1">{errors.food_name}</p>
            )}
          </div>

          {/* Rating */}
          <div>
            <input
              name="food_rating"
              value={formData.food_rating}
              onChange={handleChange}
              placeholder="Food rating (1-5)"
              type="number"
              className="food-input"
              disabled={isPending}
            />
            {errors.food_rating && (
              <p className="text-red-500 text-sm mt-1">{errors.food_rating}</p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <input
              name="food_image"
              value={formData.food_image}
              onChange={handleChange}
              placeholder="Food image (link)"
              className="food-input"
              disabled={isPending}
            />
            {errors.food_image && (
              <p className="text-red-500 text-sm mt-1">{errors.food_image}</p>
            )}
          </div>

          {/* Restaurant Name */}
          <div>
            <input
              name="restaurant_name"
              value={formData.restaurant_name}
              onChange={handleChange}
              placeholder="Restaurant name"
              className="food-input"
              disabled={isPending}
            />
            {errors.restaurant_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.restaurant_name}
              </p>
            )}
          </div>

          {/* Restaurant Logo */}
          <div>
            <input
              name="restaurant_logo"
              value={formData.restaurant_logo}
              onChange={handleChange}
              placeholder="Restaurant logo (link)"
              className="food-input"
              disabled={isPending}
            />
            {errors.restaurant_logo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.restaurant_logo}
              </p>
            )}
          </div>

          {/* Restaurant Status */}
          <div>
            <select
              name="restaurant_status"
              value={formData.restaurant_status}
              onChange={handleChange}
              className="food-input"
              disabled={isPending}
            >
              <option value="Open Now">Open Now</option>
              <option value="Closed">Closed</option>
            </select>
            {errors.restaurant_status && (
              <p className="text-red-500 text-sm mt-1">
                {errors.restaurant_status}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={isPending}
              className={`flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-2 rounded-lg shadow transition ${
                isPending ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {isPending ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isPending}
              className="flex-1 border border-orange-400 text-gray-700 font-semibold py-2 rounded-lg hover:bg-orange-50 transition disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
