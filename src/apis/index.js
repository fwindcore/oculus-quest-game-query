import axios from 'axios'

export function getStoreData() {
  return axios.get(`./oculus-quest-store.json?v=${Date.now()}`)
}

export function getRate() {
  return axios.get(`./usd-rate.json?v=${Date.now()}`)
}
