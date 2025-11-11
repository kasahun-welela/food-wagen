import React from "react";

function ErrorCard({ message }: { message: string }) {
  return (
    <div className="text-center text-2xl font-bold bg-red-100 text-red-700 p-4 rounded-md py-10 shadow-md max-w-md px-6">
      Error: {message}
    </div>
  );
}

export default ErrorCard;
