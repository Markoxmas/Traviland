export default function getLastTimer(timers) {
    let lastTimer = timers[0]
    timers.forEach((timer) => {
        if (timer.displayLength > lastTimer.displayLength) {
            lastTimer = timer
        }
    })
    return lastTimer
}
