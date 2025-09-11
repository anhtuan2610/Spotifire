import { AppDispatch, RootState } from "@/stores/redux";
import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector);
