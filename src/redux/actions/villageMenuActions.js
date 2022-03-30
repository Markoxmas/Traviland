import CONST from '../constants'

export const onSetVillage = (newId) => ({
    type: CONST.SET_VILLAGE,
    newId,
})

export const onSetField = (newField) => ({
    type: CONST.SET_FIELD,
    newField,
})
