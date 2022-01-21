import CONST from '../constants'

export const onSetResources = (newResources) => ({
    type: CONST.SET_RESOURCES,
    newResources,
})
