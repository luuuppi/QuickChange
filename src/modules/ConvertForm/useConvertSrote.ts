import { create } from "zustand";

type ConvertState = {
  from: string;
  to: string;
  setCurrency: (code: string, type: "from" | "to") => void;
};

const useConvertStore = create<ConvertState>()((set) => ({
  from: "",
  to: "",
  setCurrency: (code, type) => {
    if (type === "from") {
      set({ from: code });
    } else {
      set({ to: code });
    }
  },
}));

export default useConvertStore;
