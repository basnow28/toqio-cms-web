import * as types from '../actions/ActionTypes'

const initialState = {
  sideMenuOptions: []
}

const sideMenuReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
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
    default:
      return state;
  }
}

export default sideMenuReducer;