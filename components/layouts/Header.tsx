"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { useState } from "react";
import MealModal from "../MealModal";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between py-4 container mx-auto px-6">
      <Image src={logo} alt="food wagen logo" />
      <button
        onClick={() => setOpen(true)}
        className="bg-[linear-gradient(97.86deg,#FFBA26_-8.95%,#FF9A0E_109.24%)] text-white px-4 py-2 rounded-md"
      >
        Add Meal
      </button>
      <MealModal isOpen={open} onClose={() => setOpen(false)} />
    </header>
  );
}

export default Header;
