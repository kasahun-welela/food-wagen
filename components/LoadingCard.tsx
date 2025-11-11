
export default function LoadingCard() {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-md bg-white animate-pulse">
      {/* Image Placeholder */}
      <div className="relative h-64 bg-gray-200" />

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Logo Placeholder */}
            <div className="w-16 h-16 bg-gray-200 rounded" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-32" />
              <div className="h-3 bg-gray-200 rounded w-20" />
            </div>
          </div>

          {/* Menu Button Placeholder */}
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* Status Tag Placeholder */}
      <div className="px-4 pb-4 pt-3">
        <div className="w-20 h-6 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}
