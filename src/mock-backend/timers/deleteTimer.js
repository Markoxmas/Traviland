export default function deleteTimer(timers, timerToDelete) {
    //extract relevant timers for calculation
    const relevantTimers = timers.filter(
        (timer) => timer.type === timerToDelete.type
    )

    //get ids after the deleted timer for recalculation
    const deletedTimerIndex = relevantTimers
        .map((timer) => timer.id)
        .indexOf(timerToDelete.id)
    const changedTimersIds = relevantTimers
        .slice(deletedTimerIndex + 1, relevantTimers.length)
        .map((timer) => timer.id)

    //recalculate, remove and return new timers
    return timers
        .map((timer) =>
            changedTimersIds.includes(timer.id)
                ? {
                      ...timer,
                      displayLength: timer.displayLength - timerToDelete.length,
                  }
                : timer
        )
        .filter((timer) => timer.id !== timerToDelete.id)
}
