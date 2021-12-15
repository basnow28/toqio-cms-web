import * as types from '../actions/ActionTypes'

const initialState = {
  sideMenuOptions: []
}

const sideMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    /* FETCHING AVAILABLE SIDE MENU OPTIONS */
    case types.FETCH_SIDE_MENU_OPTIONS:
      return {
        ...state,
        isFetchingSideMenuOptions: true,
        errorFetchingSideMenuOptions: false,
      }
    case types.FETCH_SIDE_MENU_OPTIONS_SUCCESS:
      return {
        ...state,
        isFetchingSideMenuOptions: false,
        errorFetchingSideMenuOptions: false,
        sideMenuOptions: action.data,
      }
    case types.FETCH_SIDE_MENU_OPTIONS_ERROR:
      return {
        ...state,
        isFetchingSideMenuOptions: false,
        errorFetchingSideMenuOptions: true,
      }
    /* FETCHING SIDE MENU OPTIONS (ALREADY SET) */
    case types.FETCH_SIDE_MENU:
      return {
        ...state,
        isFetchingSideMenu: true,
        errorFetchingSideMenu: false,
      }
    case types.FETCH_SIDE_MENU_SUCCESS:
      return {
        ...state,
        isFetchingSideMenu: false,
        errorFetchingSideMenu: false,
        sideMenu: action.data,
      }
    case types.FETCH_SIDE_MENU_ERROR:
      return {
        ...state,
        isFetchingSideMenu: false,
        errorFetchingSideMenu: true,
      }
    /* POSTING NEW SIDE MENU OPTIONS */
    case types.POST_SIDE_MENU:
      return {
        ...state,
        isPostingSideMenu: true,
        errorPostingSideMenu: false,
      }
    case types.POST_SIDE_MENU_SUCCESS:
      return {
        ...state,
        isPostingSideMenu: false,
        errorPostingSideMenu: false,
      }
    case types.POST_SIDE_MENU_ERROR:
      return {
        ...state,
        isPostingSideMenu: false,
        errorPostingSideMenu: true,
      }
    default:
      return state;
  }
}

export default sideMenuReducer;