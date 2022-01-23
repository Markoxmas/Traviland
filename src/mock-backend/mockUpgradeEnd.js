import axios from 'axios'
import CONST from '../redux/constants'
import getProductionInfo from '../lib/getProductionInfo'

export default function mockUpgradeEnd(timer, dispatch) {
    //Get the village
    axios
        .get(`http://localhost:4000/villages/${timer.villageId}`)
        .then((response) => {
            let village = response.data

            //If the timer is finished, increase the level of the field
            const now = new Date().getTime()
            if (timer.startTime + timer.length <= now) {
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
                                getProductionInfo(field).currentLevel,
                            0
                        ),
                    wood: village.resourceFields
                        .filter((field) => field.type === 'wood')
                        .reduce(
                            (production, field) =>
                                production +
                                getProductionInfo(field).currentLevel
                        ),
                    iron: village.resourceFields
                        .filter((field) => field.type === 'iron')
                        .reduce(
                            (production, field) =>
                                production +
                                getProductionInfo(field).currentLevel,
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
