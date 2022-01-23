import axios from 'axios'
import SERVER_CONFIG from './mockServerConfig'
import CONST from '../redux/constants'
import getUpgradeCost from '../lib/getUpgradeCost'

export default function mockUpgradeStart(villageId, upgrade, dispatch) {
    //Get the village
    axios
        .get(`http://localhost:4000/villages/${villageId}`)
        .then((response) => {
            let village = response.data

            //Check if resources are sufficient for the upgrade
            try {
                //Current resources
                const resources = {
                    wood: village.resources.wood,
                    clay: village.resources.clay,
                    iron: village.resources.iron,
                }

                const field = village.resourceFields
                    .concat(village.buildings)
                    .filter((field) => field.id === upgrade.id)[0]

                const cost = getUpgradeCost(SERVER_CONFIG, field)

                //Check if upgrade can be made
                if (
                    cost.wood <= resources.wood &&
                    cost.clay <= resources.clay &&
                    cost.iron <= resources.iron
                ) {
                    //Substract the cost
                    village.resources.wood -= cost.wood
                    village.resources.clay -= cost.clay
                    village.resources.iron -= cost.iron

                    //Create a timer
                    village.timers.push({
                        id: Math.floor(Math.random() * (50000 - 1000) + 1000),
                        startTime: new Date().getTime(),
                        length: cost.time,
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
