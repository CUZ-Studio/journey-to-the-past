import { combineReducers } from "redux";

import auth from "./auth";

const rootReducer = combineReducers({
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;

declare module "react-redux" {
  type DefaultRootState = RootState;
}

export default rootReducer;
