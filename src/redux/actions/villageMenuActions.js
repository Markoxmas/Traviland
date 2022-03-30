import CONST from '../constants'

export const onSetVillage = (newVillage) => ({
    type: CONST.SET_VILLAGE,
    newVillage,
})

export const onSetField = (newField) => ({
    type: CONST.SET_FIELD,
    newField,
})
