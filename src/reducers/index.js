import { combineReducers } from "redux";
import sideMenu from "./sideMenuReducer";
import dashboard from "./dashboardReducer";

export default combineReducers({
  sideMenu,
  dashboard,
});