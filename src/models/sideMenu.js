import axios from 'axios';
import API from '../config/api.config';


export default {
  getSideMenuOptions() {
    return axios.get(API.SIDE_MENU_OPTIONS)
      .then(res => res.data)
  },
  getSideMenu() {
    return axios.get(API.SIDE_MENU)
      .then(res => res.data)
  },
  saveSideMenu(data) {
    return axios.post(API.SIDE_MENU, data)
      .then(res => res.data)
  }
}