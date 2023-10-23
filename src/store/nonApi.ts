import create from "zustand";

interface NonApiStore {
  nonApiData: any;
  setNonApiData: (data: any) => void;
}

export const useNonApiStore = create<NonApiStore>((set) => ({
  nonApiData: 0,
  setNonApiData: (data) => set({ nonApiData: data }),
}));
