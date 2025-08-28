import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
    user: null, // { id, name, role: 'admin' | 'manager' }
    loginAs: (role) => set({ user: { id: 1, name: "Demo User", role } }),
    logout: () => set({ user: null }),
    isAuthenticated: () => !!get().user,
    hasRole: (roles) => {
        const u = get().user;
        return !!u && roles.includes(u.role);
    },
}));
