import { darkTheme, lightTheme, TTheme } from "@/theme/theme";
import { create } from "zustand";

type TThemeStore = {
  mode: "light" | "dark";
  theme: TTheme;
  setMode: (mode: "light" | "dark") => void;
};

const useThemeStore = create<TThemeStore>((set) => ({
  mode: "light",
  theme: lightTheme,
  setMode: (mode) =>
    set({
      mode,
      theme: mode === "dark" ? darkTheme : lightTheme,
    }),
}));

export default useThemeStore;
