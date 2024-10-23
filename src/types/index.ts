/**
 * Interface for User data fetched from API.
 */
export interface Address {
  address: string;
  city: string;
  coordinates: { lat: number; lng: number };
  country: string;
  postalCode: string;
  state: string;
  stateCode: string;
}
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  company: {
    name: string;
    department: string;
    title: string;
    address: Address;
  };
}

/**
 * Interface for User Response
 */
export interface UserResponse {
  limit: number;
  skip: number;
  total: number;
  users: User[];
}
