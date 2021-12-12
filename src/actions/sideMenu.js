import SideMenu from '../models/sideMenu';
import * as types from './ActionTypes';

export const getSideMenuOptions = () => (dispatch) => {
  dispatch({ type: types.FETCH_SIDE_MENU_OPTIONS });
  return SideMenu.getSideMenuOptions()
    .then(data => {
      dispatch({
        type: types.FETCH_SIDE_MENU_OPTIONS_SUCCESS,
        data,
      })
    }).catch(() => {
      dispatch({
        type: types.FETCH_SIDE_MENU_OPTIONS_ERROR,
      })
    });
};