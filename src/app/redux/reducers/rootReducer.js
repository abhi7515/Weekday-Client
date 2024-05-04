import { combineReducers } from "redux";
import DashboardReducer from "./dashboardReducers";

const rootReducer = combineReducers({
  getjobs: DashboardReducer,
});

export default rootReducer;