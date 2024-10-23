import { User, UserResponse } from "../types";
import axiosInstance from "./interceptors";

/**
 * Service for interacting with the user API.
 * @module userApi
 */

/**
 * Fetch all users from the API.
 * @function fetchUsers
 * @returns {Promise<UserResponse>} A promise that resolves with the list of users.
 */
export const fetchUsers = async (): Promise<UserResponse> => {
  const response = await axiosInstance.get<UserResponse>("/users?limit=102");
  return response.data;
};

/**
 * Fetch a user by ID from the API.
 * @function fetchUserById
 * @param {number} id - The ID of the user to fetch.
 * @returns {Promise<User>} A promise that resolves with the user details.
 */
export const fetchUserById = async (id: number): Promise<User> => {
  const response = await axiosInstance.get<User>(`/users/${id}`);
  return response.data;
};
