import axios from 'axios'

export function getStoreData() {
  return axios.get('./oculus-quest-store.json')
}
