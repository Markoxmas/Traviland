import getResources from '../lib/getResources'

export default function getNewCheckpointMock(village, cost) {
    const now = new Date().getTime()
    const resourcesAtNow = getResources(village, now)
    const newCheckpoint = {
        clay: resourcesAtNow.clay - cost.clay,
        wood: resourcesAtNow.wood - cost.wood,
        iron: resourcesAtNow.iron - cost.iron,
        time: now,
    }
    return newCheckpoint
}
