import dayjs from 'dayjs'

export function getDateFromSeconds(seconds) {
  return dayjs.unix(seconds).format('YYYY-MM-DD')
}
