export type FoodStatus = "Open Now" | "Closed"

export type FoodCardProps = {
  id?: string;
  imageUrl: string
  price: string
  name: string
  rating: number
  logo:string
  status: FoodStatus
}
export interface Restaurant {
    name: string;
    logo: string;
    status: FoodStatus;
  }
  
  export interface Food {
    id?: string;
    name: string;
    image: string;
    rating: number;
    price: string;
    logo:string
    imageUrl:string
    status: FoodStatus;
    restaurant: Restaurant;
  }

  export interface CreateFood {
    food_name: string
    food_rating: number
    food_image: string
    restaurant_name: string
    restaurant_logo: string
    restaurant_status: FoodStatus
  }

  export interface MealModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  export interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
  }
  
  export interface EditFoodModalProps {
    isOpen: boolean;
    onClose: () => void;
    foodId: string | null;
  }