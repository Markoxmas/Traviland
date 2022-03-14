import getResources from '../../lib/getResources'
/**
 * newCheckpoint is either negative when resources decrease or positive when they increase.
 * positive ex. when marketplace brings resources, when army returns with resources
 * negative ex. when upgrade costs something, when you buy army, when someone robs you
 * time is the new time at which new checkpoint should be established and calculated
 */
export default function updateCheckpoint(village, newCheckpoint) {
    const { clay, iron, wood } = getResources(village, newCheckpoint.time)
    const newResources = {
        clay: clay + newCheckpoint.clay,
        iron: iron + newCheckpoint.iron,
        wood: wood + newCheckpoint.wood,
    }
    return {
        clay:
            newResources.clay > village.maxResources.clay
                ? village.maxResources.clay
                : newResources.clay,
        iron:
            newResources.iron > village.maxResources.iron
                ? village.maxResources.iron
                : newResources.iron,
        wood:
            newResources.wood > village.maxResources.wood
                ? village.maxResources.wood
                : newResources.wood,
        time: newCheckpoint.time,
    }
}
