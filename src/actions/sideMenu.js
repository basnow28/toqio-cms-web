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

export const getSideMenu = () => (dispatch) => {
  dispatch({ type: types.FETCH_SIDE_MENU });
  return SideMenu.getSideMenu()
    .then(data => {
      dispatch({
        type: types.FETCH_SIDE_MENU_SUCCESS,
        data,
      })
    }).catch(() => {
      dispatch({
        type: types.FETCH_SIDE_MENU_ERROR,
      })
    })
};

export const saveSideMenu = (data) => (dispatch) => {
  dispatch({ type: types.POST_SIDE_MENU });
  return SideMenu.saveSideMenu(data)
    .then(() => {
      dispatch({
        type: types.POST_SIDE_MENU_SUCCESS
      })
    }).catch(() => {
      dispatch({
        type: types.POST_SIDE_MENU_ERROR
      })
    })
};