import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";
import settingsReducer from "./modules/settings/settings.reducer";

const rootReducer = combineReducers({
  routing: routerReducer,
  settings: settingsReducer,
});

export default rootReducer;
