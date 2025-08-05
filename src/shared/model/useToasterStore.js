import { create } from "zustand";

export const useToastStore = create((set) => ({
    message: "",
    showToast: (msg) => set({ message: msg }),
    clearToast: () => set({ message: "" }),
}));
