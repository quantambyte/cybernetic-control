import React from "react";

/**
 * Component to show when no data is found.
 * @component
 */
const NoDataFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center">
      <div className="text-4xl font-bold text-gray-500 mb-4">404</div>
      <p className="text-lg text-gray-700">
        No data found matching your search
      </p>
    </div>
  );
};

export default NoDataFound;
