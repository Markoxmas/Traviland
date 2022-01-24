import axios from 'axios'
import CONST from '../redux/constants'
import getProductionInfo from '../lib/getProductionInfo'
import getNewCheckpoint from './getNewCheckpoint'
import getUpgradeCost from '../lib/getUpgradeCost'

export default function mockUpgradeEnd(timer, serverConfig, dispatch) {
    //Get the village
    axios
        .get(`http://localhost:4000/villages/${timer.villageId}`)
        .then((response) => {
            let village = response.data

            //If the timer is finished, increase the level of the field
            const now = new Date().getTime()
            if (timer.startTime + timer.length <= now) {
                //get new checkpoint
                const fields = village.resourceFields.concat(village.buildings)
                const field = fields.filter(
                    (field) => field.id === timer.fieldId
                )[0]
                const cost = getUpgradeCost(serverConfig, {
                    ...field,
                    level: field.level - 1,
                })
                village.checkpoint = getNewCheckpoint(village, cost)

                //remove the timer
                village.timers = village.timers.filter(
                    (villageTimer) => villageTimer.id !== timer.id
                )
                //upgrade the field
                village.resourceFields = village.resourceFields.map((field) =>
                    field.id === timer.fieldId
                        ? { ...field, level: field.level + 1 }
                        : field
                )
                village.buildings = village.buildings.map((field) =>
                    field.id === timer.fieldId
                        ? { ...field, level: field.level + 1 }
                        : field
                )
                //Update production
                village.production = {
                    clay: village.resourceFields
                        .filter((field) => field.type === 'clay')
                        .reduce(
                            (production, field) =>
                                production +
                                getProductionInfo(serverConfig, field)
                                    .currentLevel,
                            0
                        ),
                    wood: village.resourceFields
                        .filter((field) => field.type === 'wood')
                        .reduce(
                            (production, field) =>
                                production +
                                getProductionInfo(serverConfig, field)
                                    .currentLevel,
                            0
                        ),
                    iron: village.resourceFields
                        .filter((field) => field.type === 'iron')
                        .reduce(
                            (production, field) =>
                                production +
                                getProductionInfo(serverConfig, field)
                                    .currentLevel,
                            0
                        ),
                }
            }

            //Save the village
            axios
                .put(
                    `http://localhost:4000/villages/${timer.villageId}`,
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
        })
        .catch((error) =>
            dispatch({
                type: CONST.ERROR_MESSAGE,
                message: 'Couldnt get the village!',
            })
        )
}
