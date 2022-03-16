import axios from 'axios'
import serverConfig from './mockConfig'
import deleteTimer from './timers/deleteTimer'
import updateCheckpoint from './timers/updateCheckpoint'
import getProduction from './getProduction'
import CONST from '../redux/constants'

export default function mockFinishUpgrade(timer, dispatch) {
    axios
        .get(`http://localhost:4000/villages/${timer.villageId}`)
        .then((response) => {
            const village = response.data

            const villageTimer = village.timers.find(
                (villageTimer) => villageTimer.id === timer.id
            )
            if (villageTimer) {
                village.timers = deleteTimer(village.timers, villageTimer)

                const newCheckpointData = {
                    clay: 0,
                    wood: 0,
                    iron: 0,
                    time: new Date().getTime(),
                }
                village.checkpoint = updateCheckpoint(
                    village,
                    newCheckpointData
                )

                //increment field level
                village.fields = village.fields.map((field) =>
                    field.id === timer.field.id
                        ? { ...field, level: field.level + 1 }
                        : field
                )

                //update production
                village.production = getProduction(village, serverConfig)

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
                            message: 'Upgrade finished!',
                        })
                    })
                    .catch((error) =>
                        dispatch({
                            type: CONST.ERROR_MESSAGE,
                            message: 'Upgrade failed!',
                        })
                    )
            }
        })
        .catch((error) =>
            dispatch({
                type: CONST.ERROR_MESSAGE,
                message: 'Couldnt get the village!',
            })
        )
}
