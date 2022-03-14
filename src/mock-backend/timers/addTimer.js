import getLastTimer from './getLastTimer'
import uuid from 'react-uuid'

/** newTimerData properties:
 * type (village, army, armyUpgrade, marketplace, palace),
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
            fieldId: newTimerData.fieldId,
        })
    } else {
        timers.push({
            id: uuid(),
            type: newTimerData.type,
            displayStartTime: new Date().getTime(),
            displayLength: newTimerData.length,
            length: newTimerData.length,
            villageId: newTimerData.villageId,
            fieldId: newTimerData.fieldId,
        })
    }
    return timers
}
