import React, { useState } from "react";

/**
 * Props for the SearchBar component.
 */
interface SearchBarProps {
  onSearch: (term: string) => void;
}

/**
 * Component that allows users to search the list.
 * @component
 */
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Handle input change and trigger search
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center justify-center w-full max-w-lg">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search users by name..."
        className="w-full p-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
      />
    </div>
  );
};

export default SearchBar;
