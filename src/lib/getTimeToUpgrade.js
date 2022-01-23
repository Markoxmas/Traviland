export default function getTimeToUpgrade(village, cost) {
    const { resources, production } = village

    //how many ms it needs to have enough of the resource
    const timeDiff = Math.max(
        ...[
            Math.floor(
                (cost.clay - resources.clay) / (production.clay / 3600000)
            ),
            Math.floor(
                (cost.wood - resources.wood) / (production.wood / 3600000)
            ),
            Math.floor(
                (cost.iron - resources.iron) / (production.iron / 3600000)
            ),
        ]
    )

    return timeDiff > 0 ? timeDiff : 0
}
