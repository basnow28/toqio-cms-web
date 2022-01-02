import * as types from '../actions/ActionTypes'

const initialState = {
  dashboard: [],
  dashboardOptions: [],
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    /* FETCHING DASHBOARD SETUP */
    case types.FETCH_DASHBOARD:
      return {
        ...state,
        fetchingDashboard: true,
        errorFetchingDashboard: false,
      }
    case types.FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        fetchingDashboard: false,
        errorFetchingDashboard: false,
        dashboard: action.data,
      }
    case types.FETCH_DASHBOARD_ERROR:
      return {
        ...state,
        fetchingDashboard: false,
        errorFetchingDashboard: true,
      }
    /* POSTING DASHBOARD SETUP */
    case types.POST_DASHBOARD:
      return {
        ...state,
        postingDashboard: true,
        errorPostingDashboard: false,
      }
    case types.POST_DASHBOARD_SUCCESS:
      return {
        ...state,
        postingDashboard: false,
        errorPostingDashboard: false,
      }
    case types.POST_DASHBOARD_ERROR:
      return {
        ...state,
        postingDashboard: false,
        errorPostingDashboard: true,
      }
    /* FETCHING DASHBOARD OPTIONS */
    case types.FETCH_DASHBOARD_OPTIONS:
      return {
        ...state,
        fetchingDashboardOptions: true,
        errorFetchingDashboardOptions: false,
      }
    case types.FETCH_DASHBOARD_OPTIONS_SUCCESS:
      return {
        ...state,
        fetchingDashboardOptions: false,
        errorFetchingDashboardOptions: false,
        dashboardOptions: action.data,
      }
    case types.FETCH_SIDE_MENU_OPTIONS_ERROR:
      return {
        ...state,
        fetchingDashboardOptions: false,
        errorFetchingDashboardOptions: true,
      }
    default:
      return state;
  }
}

export default dashboardReducer;