import { combineReducers } from "redux";

import auth from "./auth";
import project from "./project";

const rootReducer = combineReducers({
  auth,
  project,
});

export type RootState = ReturnType<typeof rootReducer>;

declare module "react-redux" {
  type DefaultRootState = RootState;
}

export default rootReducer;
