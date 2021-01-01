import axios from 'axios'

export function getStoreData() {
  return axios.get(`./oculus-quest-store-slim.json?v=${Date.now()}`)
}

export function getRate() {
  return axios.get(`./usd-rate.json?v=${Date.now()}`)
}

export function getAppDetail(id) {
  return axios.get(`./detail/${id}/appinfo.json?v=${Date.now()}`)
}
