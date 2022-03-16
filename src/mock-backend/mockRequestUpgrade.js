import serverConfig from './mockConfig'
import axios from 'axios'
import getUpgradeCost from '../lib/getUpgradeCost'
import getTimeToUpgrade from '../lib/getTimeToUpgrade'
import updateCheckpoint from './timers/updateCheckpoint'
import addTimer from './timers/addTimer'
import CONST from '../redux/constants'

export default function mockRequestUpgrade(upgrade, dispatch) {
    axios
        .get(`http://localhost:4000/villages/${upgrade.villageId}`)
        .then((response) => {
            const village = response.data

            //Check if upgrade is possible
            const field = village.fields.find(
                (field) => field.id === upgrade.fieldId
            )
            const cost = getUpgradeCost(village, serverConfig, field)
            const sufficientResources = getTimeToUpgrade(village, cost) === 0
            const validUpgrade = field.temporaryLevel + 1 === upgrade.level

            if (sufficientResources && validUpgrade) {
                const checkpointData = {
                    clay: cost.clay,
                    wood: cost.wood,
                    iron: cost.iron,
                    time: new Date().getTime(),
                }
                village.checkpoint = updateCheckpoint(village, checkpointData)

                const newTimerData = {
                    type: upgrade.type,
                    length: cost.time,
                    villageId: upgrade.villageId,
                    field: field,
                    level: upgrade.level,
                }
                village.timers = addTimer(village.timers, newTimerData)

                //upgrade village
                axios
                    .put(
                        `http://localhost:4000/villages/${village.id}`,
                        village
                    )
                    .then((response) => {
                        //Send data to client
                        dispatch({
                            type: CONST.UPGRADE_SUCCESS,
                            village,
                        })
                        dispatch({
                            type: CONST.SUCCESS_MESSAGE,
                            message: 'Upgrade started!',
                        })
                    })
                    .catch((error) =>
                        dispatch({
                            type: CONST.ERROR_MESSAGE,
                            message: 'Upgrading village failed!',
                        })
                    )
            } else if (!sufficientResources) {
                dispatch({
                    type: CONST.UPGRADE_REJECTED,
                    message: "You don't have enough resources for the upgrade!",
                })
            } else if (!validUpgrade) {
                dispatch({
                    type: CONST.UPGRADE_REJECTED,
                    message: 'The upgrade is not valid!',
                })
            }
        })
        .catch((error) =>
            dispatch({
                type: CONST.ERROR_MESSAGE,
                message: 'Couldnt get the village!',
            })
        )
}
