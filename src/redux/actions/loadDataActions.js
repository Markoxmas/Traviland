import mockLoad from '../../mock-backend/mockLoad'

export const onLoadData = (user) => (dispatch) => {
    mockLoad(user, dispatch)
}
