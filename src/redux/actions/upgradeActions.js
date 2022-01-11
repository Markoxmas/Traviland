import mockUpgrade from '../../mock-backend/mockUpgrade'

export const onUpgrade = (villageId, upgrade) => (dispatch) => {
    mockUpgrade(villageId, upgrade, dispatch)
}
