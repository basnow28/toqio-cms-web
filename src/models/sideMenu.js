import axios from 'axios';
import API from '../config/api.config';


export default {
  getSideMenuOptions() {
    return axios.get(API.SIDE_MENU_OPTIONS)
      .then(res => res.data)
  }
}