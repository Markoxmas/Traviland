export default function formatMsToTime(ms) {
    const hours = Math.floor(ms / 3600000)
    const min = Math.floor((ms - hours * 3600000) / 60000)
    const sec = Math.floor((ms - hours * 3600000 - min * 60000) / 1000)
    return hours + 'h ' + min + 'm ' + sec + 's'
}
