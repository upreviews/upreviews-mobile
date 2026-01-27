import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  refreshToken?: string;
}

type AuthStore = AuthState & {
  login: () => void;
  logout: () => void;
};

const initialState: AuthState = {
  isAuthenticated: false,
};

export const useAuthStore = create<AuthStore>((set) => ({
  ...initialState,
  login: () => set({ isAuthenticated: true }),
  logout: () =>
    set({ isAuthenticated: false, token: undefined, refreshToken: undefined }),
}));
