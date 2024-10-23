import SearchBar from "../SearchBar";

const UserItemSkeleton = ({ length = 10 }: { length: number }) => {
  return (
    <>
      <div className="container mx-auto px-4 my-10 flex flex-col items-center gap-10">
        <SearchBar onSearch={() => {}} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length }).map((_, index) => (
            <div
              className="bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group animate-pulse p-6 max-w-xs w-full min-w-[340px]"
              key={index}
            >
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-2" />
              <div className="h-4 bg-gray-300 rounded w-4/6 mb-2" />
              <div className="h-4 bg-gray-300 rounded w-3/5 mb-4" />
              <div className="h-10 bg-gray-300 rounded w-full mt-4" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserItemSkeleton;
