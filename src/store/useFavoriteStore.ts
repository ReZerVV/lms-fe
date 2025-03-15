import { create } from "zustand";
import { persist } from "zustand/middleware";

import { FAVORITE_STORAGE } from "@/shared";

interface useFavoriteStoreProps {
    favorites: string[];
    toggleFavorite: (id: string) => void;
}

const initialState = {
    favorites: []
};

export const useFavoriteStore = create<useFavoriteStoreProps>()(
    persist<useFavoriteStoreProps>(
        (set, get) => ({
            ...initialState,
            toggleFavorite: (id: string) => {
                if (get().favorites.includes(id)) {
                    set((state) => ({
                        favorites: state.favorites.filter((item) => item !== id)
                    }));
                } else {
                    set((state) => ({
                        favorites: [...state.favorites, id]
                    }));
                }
            }
        }),
        { name: FAVORITE_STORAGE }
    )
);
