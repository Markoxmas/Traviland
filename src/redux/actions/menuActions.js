import CONST from '../constants'

export const onSetMenu = (newValue) => ({
    type: CONST.SET_MENU,
    tab: newValue,
})
