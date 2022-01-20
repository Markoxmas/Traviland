export default function formatNumber(number) {
    if (number < 10000) {
        return number
    } else if (number < 1000000) {
        return Math.floor(number / 1000) + 'k'
    } else {
        return Math.floor(number / 1000000) + 'm'
    }
}
