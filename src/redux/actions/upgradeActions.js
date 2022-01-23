import mockUpgradeStart from '../../mock-backend/mockUpgradeStart'
import mockUpgradeEnd from '../../mock-backend/mockUpgradeEnd'

export const onUpgradeRequested = (villageId, upgrade) => (dispatch) => {
    mockUpgradeStart(villageId, upgrade, dispatch)
}

export const onUpgradeFinished = (timer) => (dispatch) => {
    mockUpgradeEnd(timer, dispatch)
}
