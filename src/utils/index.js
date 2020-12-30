import dayjs from 'dayjs'

export function getDateFromSeconds(seconds) {
  return dayjs.unix(seconds).format('YYYY-MM-DD')
}

export function getRatedPrice(price, rate, currency) {
  // const rate = 6.53;
  if (price == '0') {
    return null
  } else {
    return ((price * rate[currency].rate) / 100).toFixed(2)
  }
}
