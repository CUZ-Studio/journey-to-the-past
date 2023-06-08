import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { setProject } from "../slices/project";

export default function useProjectActions() {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators({ setProject }, dispatch), [dispatch]);
}
