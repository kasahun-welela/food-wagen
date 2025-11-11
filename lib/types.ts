export type FoodStatus = "open" | "closed"

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
    status: FoodStatus;
    restaurant: Restaurant;
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
  