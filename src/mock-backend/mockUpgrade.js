import axios from 'axios'
import SERVER_CONFIG from './mockServerConfig'
import CONST from '../redux/constants'

export default function mockUpgrade(villageId, upgrade, dispatch) {
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

                //Get field info
                let field = undefined
                if (upgrade.type === 'resources') {
                    field = village.resourceFields.filter(
                        (field) => field.id === upgrade.id
                    )[0]
                } else {
                    field = village.buildings.filter(
                        (building) => building.id === upgrade.id
                    )[0]
                }

                //Get upgrade info
                const UPGRADE_INFO = SERVER_CONFIG[field.type.toUpperCase()]
                const upgradeCost = {
                    wood: Math.floor(
                        (UPGRADE_INFO.WOOD_A1 * UPGRADE_INFO.WOOD_K) **
                            (field.level + 1 - 1)
                    ),
                    clay: Math.floor(
                        (UPGRADE_INFO.CLAY_A1 * UPGRADE_INFO.CLAY_K) **
                            (field.level + 1 - 1)
                    ),
                    iron: Math.floor(
                        (UPGRADE_INFO.IRON_A1 * UPGRADE_INFO.IRON_K) **
                            (field.level + 1 - 1)
                    ),
                }

                //Check if upgrade can be made
                if (
                    upgradeCost.wood <= resources.wood &&
                    upgradeCost.clay <= resources.clay &&
                    upgradeCost.iron <= resources.iron
                ) {
                    //Substract the cost
                    village.resources.wood -= upgradeCost.wood
                    village.resources.clay -= upgradeCost.clay
                    village.resources.iron -= upgradeCost.iron

                    //Create a timer
                    village.timers.push({
                        id: Math.floor(Math.random() * (50000 - 1000) + 1000),
                        startTime: new Date().getTime(),
                        length: 10000, //10 seconds in ms,
                        type: upgrade.type,
                        fieldId: upgrade.id,
                    })

                    //Update the village
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
