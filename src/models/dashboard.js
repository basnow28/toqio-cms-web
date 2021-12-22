import axios from 'axios';
import API from '../config/api.config';

export default {
  getDashboard() {
    return axios.get(API.DASHBOARD)
      .then(res => res.data);
  },
  saveDashboard(data) {
    return axios.post(API.DASHBOARD, data)
      .then(res => res.data);
  },
  getDashboardOptions() {
    return axios.get(API.DASHBOARD_OPTIONS)
      .then(res => res.data);
  },
}