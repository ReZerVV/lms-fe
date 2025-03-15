export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/`;
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
export const STORAGE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/uploads/`;

export const CART_STORAGE = "cart-storage";
export const FAVORITE_STORAGE = "favorite-storage";

export enum USER_ROLES {
    ADMIN = "admin",
    USER = "user"
}
