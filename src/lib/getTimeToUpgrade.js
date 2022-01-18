export default function getTimeToUpgrade(village, cost) {
    const { resources, production } = village

    //how many seconds it needs to have enough of the resource
    const timeDiff = [
        Math.floor((cost.clay - resources.clay) / (production.clay / 3600)),
        Math.floor((cost.wood - resources.wood) / (production.wood / 3600)),
        Math.floor((cost.iron - resources.iron) / (production.iron / 3600)),
    ]

    return Math.max(timeDiff)
}
