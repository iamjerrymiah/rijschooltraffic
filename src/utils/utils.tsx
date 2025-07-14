import moment from 'moment'

export function allCaps(text: string | number) {
    return String(text ?? '').toUpperCase()
}
export function allLower(text: string | number) {
    return String(text ?? '').toLowerCase()
}
export const camelCase = (text: string = '') => {
    return String(text).charAt(0).toLowerCase() + String(text).slice(1)
}
export function capCase(text: string = '', splitter: string = ' ') {
    if (text === '' || text == null || text == 'null') {
        return ''
    }
    let newStr = String(text).split(splitter)
    return newStr.map(e => `${allCaps(e[0])}${allLower(e.slice(1))}`).join(' ')
}

export const moneyFormat = (amount: string | number, integer?: boolean) => {
    if (amount === 'NIL') {
        return amount
    } else {
        let newAmount = Number(amount) ? Number(amount) : Number(0)
        return newAmount.toLocaleString(undefined, {minimumFractionDigits: integer ? 0 : 2, maximumFractionDigits: integer ? 0 : 2})
    }
}

export function momentDate(date = '') {
    return date === '' ? moment().format('YYYY-MM-DDTHH:mm') : moment(date ?? '').format('YYYY-MM-DDTHH:mm')
}
export function inputDateFormat(date = '') {
    return date ? moment(date).format("YYYY-MM-DD") : '' 
}
export function preferDateFormat(date = '') {
    return date ? moment(date).format("ll") : '' 
}
export function prettyDateFormat(date = '') {
    return date ? moment(date).format("ll") : '' 
}
