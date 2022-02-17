import getProductionInfo from '../lib/getProductionInfo'

export default function upgradeProduction(village, serverConfig) {
    const [brickyard, ironFoundry, sawmill] = [
        village.fields.find((field) => field.type === 'brickyard'),
        village.fields.find((field) => field.type === 'iron_foundry'),
        village.fields.find((field) => field.type === 'sawmill'),
    ]
    const { BRICKYARD, IRON_FOUNDRY, SAWMILL } = serverConfig
    return {
        clay: Math.floor(
            village.fields
                .filter((field) => field.type === 'clay')
                .reduce(
                    (production, field) =>
                        production +
                        getProductionInfo(serverConfig, field).currentLevel,
                    0
                ) * BRICKYARD.INCREASE[brickyard.level]
        ),
        wood: Math.floor(
            village.fields
                .filter((field) => field.type === 'wood')
                .reduce(
                    (production, field) =>
                        production +
                        getProductionInfo(serverConfig, field).currentLevel,
                    0
                ) * IRON_FOUNDRY.INCREASE[ironFoundry.level]
        ),
        iron: Math.floor(
            village.fields
                .filter((field) => field.type === 'iron')
                .reduce(
                    (production, field) =>
                        production +
                        getProductionInfo(serverConfig, field).currentLevel,
                    0
                ) * SAWMILL.INCREASE[sawmill.level]
        ),
    }
}
