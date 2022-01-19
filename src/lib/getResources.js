//atTime is time in ms
export default function getResources(village, atTime) {
    const resources = {
        clay: Math.floor(
            village.checkpoint.clay +
                (atTime - village.checkpoint.time) *
                    (village.production.clay / 3600000)
        ),
        wood: Math.floor(
            village.checkpoint.wood +
                (atTime - village.checkpoint.time) *
                    (village.production.wood / 3600000)
        ),
        iron: Math.floor(
            village.checkpoint.iron +
                (atTime - village.checkpoint.time) *
                    (village.production.iron / 3600000)
        ),
    }

    return {
        clay:
            village.maxResources.clay > resources.clay
                ? resources.clay
                : village.maxResources.clay,
        wood:
            village.maxResources.wood > resources.wood
                ? resources.wood
                : village.maxResources.wood,
        iron:
            village.maxResources.iron > resources.iron
                ? resources.iron
                : village.maxResources.iron,
    }
}
