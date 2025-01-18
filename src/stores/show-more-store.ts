import { create } from "zustand";

interface ShowMoreState {
  showMore: boolean;
  setShowMore: (value: boolean) => void;
}

export const useShowMoreStore = create<ShowMoreState>()((set) => ({
  showMore: false,
  setShowMore: (value) => {
    set({ showMore: value });
  },
}));
