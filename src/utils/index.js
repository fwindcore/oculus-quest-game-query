import dayjs from 'dayjs'

export function getDateFromSeconds(seconds) {
  return dayjs.unix(seconds).format('YYYY-MM-DD')
}

export function getRatedPrice(price, rate) {
  // const rate = 6.53;
  if (price == '0') {
    return null
  } else {
    return ((price * rate.USD) / 100).toFixed(2)
  }
}
