import React, { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { UserItem, UserItemSkeleton } from "./UserItem";
import SearchBar from "./SearchBar";
import NoDataFound from "./NoDataFound";

/**
 * Component that displays a list of users with a 3-column responsive layout.
 * @component
 */
const UserList: React.FC = () => {
  const { users, loading } = useUser();
  const [filteredUsers, setFilteredUsers] = useState(users);

  const onSearch = (value: string) => {
    const searchTerm = value.toLowerCase();
    const filteredData = searchTerm
      ? users.filter((user) => {
          const firstName = user.firstName.toLowerCase();
          const lastName = user.lastName.toLowerCase();
          return (
            firstName.includes(searchTerm) || lastName.includes(searchTerm)
          );
        })
      : users;

    setFilteredUsers(filteredData);
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  if (loading) return <UserItemSkeleton length={12} />;

  return (
    <div className="container mx-auto px-4 my-10 flex flex-col items-center gap-10">
      <SearchBar onSearch={onSearch} />

      {!filteredUsers.length ? (
        <NoDataFound />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUsers.map((user) => (
            <UserItem user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
