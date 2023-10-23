import create from "zustand";
import axios from "axios";

interface ApiUserStore {
  users: any[]; // Define the type for your user data
  isLoading: boolean;
  fetchUsers: () => Promise<void>;
}

export const useApiUserStore = create<ApiUserStore>((set) => ({
  users: [],
  isLoading: false,
  fetchUsers: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      ); // Replace with your actual API endpoint
      set({ users: response.data });
      set({ isLoading: false });
    } catch (error) {
      console.error("Error fetching user data:", error);
      set({ isLoading: false });
    }
  },
}));
