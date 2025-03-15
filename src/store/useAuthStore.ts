import { create } from "zustand";

import { IUser } from "@/shared";

interface useAuthStoreProps {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
}

const initialState = {
    user: null
};

export const useAuthStore = create<useAuthStoreProps>((set) => ({
    ...initialState,
    setUser: (user: IUser | null) => set({ user })
}));
