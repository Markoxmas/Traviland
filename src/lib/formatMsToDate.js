export default function formatMsToDate(ms) {
    const wholeDate = new Date(ms)
    const time = wholeDate.toString().split(' GMT')[0].slice(-8)
    const date = wholeDate.toDateString()
    return `${time} (${date})`
}
