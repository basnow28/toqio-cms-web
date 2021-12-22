import Dashboard from '../models/dashboard';
import * as types from './ActionTypes';

export const getDashboard = () => (dispatch) => {
  dispatch({ type: types.FETCH_DASHBOARD });
  return Dashboard.getDashboard()
    .then(data => {
      dispatch({
        type: types.FETCH_DASHBOARD_SUCCESS,
        data,
      })
    }).catch(() => {
      dispatch({
        type: types.FETCH_DASHBOARD_ERROR,
      })
    });
};

export const saveDashboard = (data) => (dispatch) => {
  dispatch({ type: types.POST_DASHBOARD });
  return Dashboard.saveDashboard(data)
    .then(() => {
      dispatch({
        type: types.POST_DASHBOARD_SUCCESS,
      })
    }).catch(() => {
      dispatch({
        type: types.POST_DASHBOARD_ERROR,
      })
    })
};

export const getDashboardOptions = () => (dispatch) => {
  dispatch({ type: types.FETCH_DASHBOARD_OPTIONS });
  return Dashboard.getDashboardOptions()
    .then(data => {
      dispatch({
        type: types.FETCH_DASHBOARD_OPTIONS_SUCCESS,
        data,
      })
    }).catch(() => {
      dispatch({
        type: types.FETCH_DASHBOARD_OPTIONS_ERROR,
      })
    })
};