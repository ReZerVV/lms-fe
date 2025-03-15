import { create } from "zustand";
import { persist } from "zustand/middleware";

import { CART_STORAGE, ICart } from "@/shared";

interface useCartStoreProps {
    cart: ICart[];
    addProduct: (cart: ICart) => void;
    removeProduct: (id: string) => void;
    clearCart: () => void;
}

const initialState = {
    cart: []
};

export const useCartStore = create<useCartStoreProps>()(
    persist<useCartStoreProps>(
        (set, get) => ({
            ...initialState,
            addProduct: (cart: ICart) => {
                if (
                    get().cart.some(
                        (item) =>
                            item.id === cart.id && item.count !== cart.count
                    )
                ) {
                    const newCarts = get().cart.map((item) => {
                        return item.id === cart.id
                            ? { ...item, count: cart.count }
                            : item;
                    });

                    set({ cart: newCarts });
                } else if (!get().cart.some((item) => item.id === cart.id)) {
                    set((state) => ({
                        cart: [...state.cart, cart]
                    }));
                }
            },
            removeProduct: (id: string) => {
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== id)
                }));
            },
            clearCart: () => set({ cart: [] })
        }),
        { name: CART_STORAGE }
    )
);
