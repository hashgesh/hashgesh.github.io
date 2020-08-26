import axios from 'axios';

export function getDimensionList() {
  return axios.get('/proxy.php');
}
