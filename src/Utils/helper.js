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

    let date = value.substring(0, 10) + " " + value.substring(11, 19)
    return moment(date).format('Do MMM YYYY, HH:MM')
}

export const formatDate = (value) => {
    if (!value || value == null) return `0`

    let date = value.substring(0, 10)
    return moment(date).format('LL')
}

export const formatCamelCase = (value) => {
    var splitValue = value.toLowerCase().split(' ');
    for (var i = 0; i < splitValue.length; i++) {
        splitValue[i] = splitValue[i].charAt(0).toUpperCase() + splitValue[i].substring(1);
    }

    return splitValue.join(' ');
}