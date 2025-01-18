import { create } from "zustand";

interface SearchStore {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}
export const useSearchStore = create<SearchStore>()((set) => ({
  isVisible: false,
  setIsVisible: (isVisible) => set({ isVisible: !isVisible }),
}));
