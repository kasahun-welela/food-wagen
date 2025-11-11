import { z } from "zod";

export const mealSchema = z.object({
  food_name: z.string().min(1, "Food name is required"),
  food_rating: z.coerce
    .number()
    .min(1, "Rating must be between 1 and 5")
    .max(5, "Rating must be between 1 and 5"),
  food_image: z.string().url("Please enter a valid image URL"),
  restaurant_name: z.string().min(1, "Restaurant name is required"),
  restaurant_logo: z.string().url("Please enter a valid logo URL"),
  restaurant_status: z.enum(["Open Now", "Closed"]),
});

export default mealSchema;