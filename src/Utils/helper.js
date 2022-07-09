import moment from "moment";
moment.updateLocale('id', require('moment/locale/id'))

export const formatRupiah = (value) => {
    if (!value || value == null) return `0`

    let newValue = value.toString()
    let remainder = newValue.length % 3
    let rupiah = newValue.substr(0, remainder)
    let thousand = newValue.substr(remainder).match(/\d{3}/g)

    if (thousand) {
        let separator = remainder ? '.' : ''
        rupiah += separator + thousand.join('.')
    }

    return rupiah
}

export const formatTimestamp = (value) => {
    if (!value || value == null) return `0`

    let date = value.substring(0, 11)
    return moment(value).format('Do MMM YYYY, HH:MM')
}

export const formatDate = (value) => {
    if (!value || value == null) return `0`

    let date = value.substring(0, 11)
    return moment(date).format('LL')
}