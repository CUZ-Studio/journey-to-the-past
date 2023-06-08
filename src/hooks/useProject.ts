import { useSelector } from "react-redux";

import { RootState } from "@/slices";

export default function useProject() {
  return useSelector((state: RootState) => state.project.furo);
}
