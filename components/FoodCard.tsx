"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEllipsisVertical,
  faStar,
  faTag,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FoodCardProps } from "@/lib/types";

function FoodCard({
  imageUrl,
  price,
  name,
  rating,
  status,
  logo,
}: FoodCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-md bg-white">
      <div className="relative h-64">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          priority={false}
        />
        <span className="absolute top-3 left-3 rounded-full px-3 py-1 text-sm font-semibold text-white bg-[linear-gradient(97.86deg,#FFBA26_-8.95%,#FF9A0E_109.24%)] shadow flex items-center gap-1">
          <FontAwesomeIcon icon={faTag} /> ${price}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt={name}
              width={64}
              height={64}
              className="rounded"
            />
            <div>
              <h3 className="font-semibold text-gray-900 line-clamp-1">
                {name}
              </h3>
              <div className="flex items-center gap-1 text-sm text-amber-500">
                <FontAwesomeIcon icon={faStar} />
                <span className="text-gray-700">{rating}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              aria-label="More actions"
              onClick={() => setShowMenu((v) => !v)}
              className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
            >
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-36 rounded-md border border-gray-200 bg-white shadow-lg overflow-hidden z-10">
                <button
                  type="button"
                  className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-gray-700"
                  onClick={() => setShowMenu(false)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                  Edit
                </button>
                <button
                  type="button"
                  className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-red-600"
                  onClick={() => setShowMenu(false)}
                >
                  {/* Trash icon */}
                  <FontAwesomeIcon icon={faTrash} />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 pt-3">
        <span
          className={`inline-block rounded-full px-3 py-1  font-bold ${
            status === "open"
              ? "bg-lime-100 text-lime-500"
              : "bg-orange-100 text-orange-500"
          }`}
        >
          {status === "open" ? "Open" : "Closed"}
        </span>
      </div>
    </div>
  );
}

export default FoodCard;
