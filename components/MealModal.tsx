"use client";

import { MealModalProps } from "@/lib/types";
import { useState } from "react";
import { mealSchema } from "@/lib/ValidationSchema";

export default function MealModal({ isOpen, onClose }: MealModalProps) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    food_name: "",
    food_rating: "",
    food_image: "",
    restaurant_name: "",
    restaurant_logo: "",
    restaurant_status: "Open Now",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateAll = (data: typeof formData) => {
    const parsedData = {
      ...data,
      food_rating: Number(data.food_rating),
    };
    const result = mealSchema.safeParse(parsedData);
    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (field) {
          formattedErrors[field as string] = issue.message;
        }
      }
      setErrors(formattedErrors);
    } else {
      setErrors({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
    // Live validation as user types/selects
    validateAll(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedData = {
      ...formData,
      food_rating: Number(formData.food_rating),
    };

    const result = mealSchema.safeParse(parsedData);

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (field) {
          formattedErrors[field as string] = issue.message;
        }
      }
      setErrors(formattedErrors);
      return;
    }
    setErrors({});
    console.log("Validated Data:", result.data);

    // reset form
    setFormData({
      food_name: "",
      food_rating: "",
      food_image: "",
      restaurant_name: "",
      restaurant_logo: "",
      restaurant_status: "Open Now",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-center text-2xl font-semibold text-orange-500 mb-6">
          Add a meal
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
            />
            {errors.food_name && (
              <p
                className="text-red-500 text-sm mt-1"
                id="restaurant_name-error"
              >
                {errors.food_name}
              </p>
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
            />
            {errors.food_rating && (
              <p
                className="text-red-500 text-sm mt-1"
                id="restaurant_rating-error"
              >
                {errors.food_rating}
              </p>
            )}
          </div>

          {/* Food Image URL */}
          <div>
            <input
              name="food_image"
              value={formData.food_image}
              onChange={handleChange}
              placeholder="Food image (link)"
              className="food-input"
            />
            {errors.food_image && (
              <p
                className="text-red-500 text-sm mt-1"
                id="restaurant_image-error"
              >
                {errors.food_image}
              </p>
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
            />
            {errors.restaurant_name && (
              <p
                className="text-red-500 text-sm mt-1"
                id="restaurant_name-error"
              >
                {errors.restaurant_name}
              </p>
            )}
          </div>

          {/* Restaurant Logo URL */}
          <div>
            <input
              name="restaurant_logo"
              value={formData.restaurant_logo}
              onChange={handleChange}
              placeholder="Restaurant logo (link)"
              className="food-input"
            />
            {errors.restaurant_logo && (
              <p
                className="text-red-500 text-sm mt-1"
                id="restaurant_logo-error"
              >
                {errors.restaurant_logo}
              </p>
            )}
          </div>

          <select
            name="restaurant_status"
            value={formData.restaurant_status}
            onChange={handleChange}
            className="food-input"
          >
            <option value="Open Now">Open Now</option>
            <option value="Closed">Closed</option>
          </select>
          {errors.restaurant_status && (
            <p className="text-red-500 text-sm mt-1">
              {errors.restaurant_status}
            </p>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-linear-to-r from-orange-400 to-orange-500 text-white font-semibold py-2 rounded-lg shadow hover:opacity-90 transition"
            >
              Add Food
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-orange-400 text-gray-700 font-semibold py-2 rounded-lg hover:bg-orange-50 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
