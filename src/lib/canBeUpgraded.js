export default function canBeUpgraded(cost, village) {
    if (
        cost.clay <= village.resources.clay &&
        cost.wood <= village.resources.wood &&
        cost.iron <= village.resources.iron
    ) {
        return true
    } else {
        return false
    }
}
