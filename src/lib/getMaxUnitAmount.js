import getUnitCost from './getUnitCost'
import getResources from './getResources'

export default function getMaxUnitAmount(village, field, serverConfig) {
    const unitCosts = getUnitCost(serverConfig, field)
    const now = new Date().getTime()
    const resources = getResources(village, now)
    let results = {}
    Object.keys(unitCosts).forEach((unit) => {
        results[unit] = Math.min(
            ...[
                Math.floor(resources.clay / unitCosts[unit].clay),
                Math.floor(resources.iron / unitCosts[unit].iron),
                Math.floor(resources.wood / unitCosts[unit].wood),
            ]
        )
    })
    return results
}
