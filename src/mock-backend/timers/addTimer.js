import getLastTimer from './getLastTimer'
import uuid from 'react-uuid'

/** newTimerData properties:
 * type (field, army, armyUpgrade, marketplace, palace),
 * length, villageId, fieldId
 * */
export default function addTimer(timers, newTimerData) {
    const relevantTimers = timers.filter(
        (timer) => timer.type === newTimerData.type
    )

    if (relevantTimers.length) {
        const lastTimer = getLastTimer(relevantTimers)
        timers.push({
            id: uuid(),
            type: newTimerData.type,
            displayStartTime: relevantTimers[0].displayStartTime,
            displayLength: lastTimer.length + newTimerData.length,
            length: newTimerData.length,
            villageId: newTimerData.villageId,
            field: newTimerData.field,
            level: newTimerData.level,
        })
    } else {
        timers.push({
            id: uuid(),
            type: newTimerData.type,
            displayStartTime: new Date().getTime(),
            displayLength: newTimerData.length,
            length: newTimerData.length,
            villageId: newTimerData.villageId,
            field: newTimerData.field,
            level: newTimerData.level,
        })
    }
    return timers
}
