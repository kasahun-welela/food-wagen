"use client";

import React from "react";
import { DeleteModalProps } from "@/lib/types";

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 ">
        <h2 className="text-2xl font-semibold text-orange-500 mb-3 text-center">
          Delete Meal
        </h2>
        <p className="text-gray-500 mb-6">
          Are you sure you want to delete this meal? Actions cannot be reversed.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-2 rounded-lg shadow hover:opacity-90 transition"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="flex-1 border border-orange-400 text-gray-700 font-semibold py-2 rounded-lg hover:bg-orange-50 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
