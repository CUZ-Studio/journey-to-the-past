import { useSelector } from "react-redux";

import { RootState } from "@/slices";

export default function useHasClientId() {
  return useSelector((state: RootState) => state.auth.hasClientId);
}
