import axios from 'axios'
import CONST from '../redux/constants'
import getUpgradeCost from '../lib/getUpgradeCost'
import getResources from '../lib/getResources'
import getNewCheckpoint from './getNewCheckpoint'

export default function mockUpgradeStart(
    villageId,
    upgrade,
    serverConfig,
    dispatch
) {
    //Get the village
    axios
        .get(`http://localhost:4000/villages/${villageId}`)
        .then((response) => {
            let village = response.data

            //Check if resources are sufficient for the upgrade
            try {
                //Current resources
                const resources = getResources(village, new Date().getTime())

                const field = village.fields.filter(
                    (field) => field.id === upgrade.id
                )[0]

                const cost = getUpgradeCost(serverConfig, field)

                //Check if upgrade can be made
                if (
                    cost.wood <= resources.wood &&
                    cost.clay <= resources.clay &&
                    cost.iron <= resources.iron
                ) {
                    village.checkpoint = getNewCheckpoint(village, cost)
                    const firstStartTime = village.timers.length
                        ? Math.min(
                              ...village.timers.map((timer) => timer.startTime)
                          )
                        : 0
                    const timersLength = village.timers.length
                        ? village.timers.reduce(
                              (total, timer) => total + timer.length,
                              0
                          )
                        : 0

                    //Create a timer
                    const now = new Date().getTime()
                    village.timers.push({
                        id: Math.floor(Math.random() * (50000 - 1000) + 1000),
                        startTime: firstStartTime ? firstStartTime : now,
                        length: timersLength + cost.time,
                        fieldId: upgrade.id,
                        villageId: villageId,
                    })

                    //Save the village
                    axios
                        .put(
                            `http://localhost:4000/villages/${villageId}`,
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
                } else {
                    //Insufficient resources
                    dispatch({
                        type: CONST.UPGRADE_REJECTED,
                        message: 'Upgrade rejected!',
                    })
                }
            } catch (error) {
                dispatch({
                    type: CONST.ERROR_MESSAGE,
                    message: 'Something went wrong in the function!',
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
