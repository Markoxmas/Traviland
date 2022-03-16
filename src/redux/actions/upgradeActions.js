import mockRequestUpgrade from '../../mock-backend/mockRequestUpgrade'
import mockFinishUpgrade from '../../mock-backend/mockFinishUpgrade'

export const onUpgradeRequested = (upgrade) => (dispatch) => {
    mockRequestUpgrade(upgrade, dispatch)
}

export const onUpgradeFinished = (timer) => (dispatch) => {
    mockFinishUpgrade(timer, dispatch)
}
