import mockRequestUpgrade from '../../mock-backend/mockRequestUpgrade'
import mockUpgradeEnd from '../../mock-backend/mockUpgradeEnd'

export const onUpgradeRequested = (upgrade) => (dispatch) => {
    mockRequestUpgrade(upgrade, dispatch)
}

export const onUpgradeFinished = (timer, serverConfig) => (dispatch) => {
    mockUpgradeEnd(timer, serverConfig, dispatch)
}
