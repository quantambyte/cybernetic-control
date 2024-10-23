import { RootState } from "../../redux/store";
import { User } from "../../types";

/**
 * Selector to get all users from the state.
 * @function selectAllUsers
 * @param {RootState} state - The current Redux state.
 * @returns {User[]} The list of users.
 */
export const selectAllUsers = (state: RootState): User[] => state.users.users;

/**
 * Selector to get the selected user from the state.
 * @function selectSelectedUser
 * @param {RootState} state - The current Redux state.
 * @returns {User | null} The selected user or null.
 */
export const selectSelectedUser = (state: RootState): User | null =>
  state.users.selectedUser;

/**
 * Selector to get loading state.
 * @function selectLoading
 * @param {RootState} state - The current Redux state.
 * @returns {boolean} Whether the data is loading or not.
 */
export const selectLoading = (state: RootState): boolean => state.users.loading;
