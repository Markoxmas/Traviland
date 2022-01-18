export default function getResources(village) {
    const now = new Date().getTime()
    return {
        clay: Math.floor(
            village.checkpoint.clay +
                (now - village.checkpoint.time) *
                    (village.production.clay / 3600000)
        ),
        wood: Math.floor(
            village.checkpoint.wood +
                (now - village.checkpoint.time) *
                    (village.production.wood / 3600000)
        ),
        iron: Math.floor(
            village.checkpoint.iron +
                (now - village.checkpoint.time) *
                    (village.production.iron / 3600000)
        ),
    }
}
