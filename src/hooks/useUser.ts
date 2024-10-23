import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchAllUsers, setSelectedUser } from "../features/users/userSlice";
import {
  selectAllUsers,
  selectLoading,
  selectSelectedUser,
} from "../features/users/userSelectors";
import { User } from "../types";

/**
 * Custom hook for managing user-related logic.
 * @module useUser
 */
export const useUser = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const selectedUser = useAppSelector(selectSelectedUser);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    if (!loading && users.length === 0) {
      dispatch(fetchAllUsers());
    }
  }, [dispatch, loading, users.length]);

  /**
   * Select a user.
   * @function handleSelectUser
   * @param {number} user - The user to select.
   */
  const handleSelectUser = (user: User) => {
    dispatch(setSelectedUser(user));
  };

  return { users, selectedUser, handleSelectUser, loading };
};
