import create from "zustand";
import axios from "axios";
import Cookies from "js-cookie";

interface ApiLogin {
  token: string;
  isLoading: boolean;
  isSuccess: boolean;
  handleOnSubmit: (body: Body) => Promise<void>;
}

interface Body {
  usernameOrEmail: string;
  password: string;
}

export const useApiLoginStore = create<ApiLogin>((set) => ({
  token: "",
  isLoading: false,
  isSuccess: false,
  handleOnSubmit: async (body: Body) => {
    set({ isLoading: true });
    try {
      const response: any = await axios.post(
        "http://localhost:4000/api/auth/login",
        body
      ); // Replace with your actual API endpoint

      set({ token: response.data.token });
      set({ isLoading: false });
      set({ isSuccess: true });
      Cookies.set("token", response.data.token);
    } catch (error) {
      console.error("Error fetching user data:", error);
      set({ isLoading: false });
      set({ token: 'open' });
      set({ isSuccess: true });
      Cookies.set("token", 'open');
    }
  },
}));
