import mockUpgradeStart from '../../mock-backend/mockUpgradeStart'
import mockUpgradeEnd from '../../mock-backend/mockUpgradeEnd'

export const onUpgradeRequested =
    (villageId, upgrade, serverConfig) => (dispatch) => {
        mockUpgradeStart(villageId, upgrade, serverConfig, dispatch)
    }

export const onUpgradeFinished = (timer, serverConfig) => (dispatch) => {
    mockUpgradeEnd(timer, serverConfig, dispatch)
}
