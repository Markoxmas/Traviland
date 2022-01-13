import axios from 'axios'
import CONST from '../redux/constants'

export default function mockLoad(user, dispatch) {
    dispatch({ type: CONST.LOAD_DATA_REQUESTED })

    const data = {}

    //get server config
    axios
        .get(`http://localhost:4000/serverConfig`)
        .then((response) => {
            data.serverConfig = response.data
        })
        .catch((error) => dispatch({ type: CONST.LOAD_DATA_FAILED, error }))

    //get village data
    const villagesString = user.villageIds
        .map((id) => `&id=${id}`)
        .join('')
        .substring(1)
    axios
        .get(`http://localhost:4000/villages?${villagesString}`)
        .then((response) => {
            data.villages = response.data
            dispatch({ type: CONST.LOAD_DATA_SUCCESS, data })
        })
        .catch((error) => {
            dispatch({ type: CONST.LOAD_DATA_FAILED, error })
        })
}
