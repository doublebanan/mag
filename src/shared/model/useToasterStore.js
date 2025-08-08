import { create } from "zustand";

export const useToastStore = create((set) => ({
    message: "",
    visible: false,
    showToast: (msg) => {
        set({ message: msg, visible: true });
        setTimeout(() => set({ visible: false }), 1000);
    },
}));
