import getProductionInfo from '../lib/getProductionInfo'

export default function upgradeProduction(village, serverConfig) {
    return {
        clay: village.fields
            .filter((field) => field.type === 'clay')
            .reduce(
                (production, field) =>
                    production +
                    getProductionInfo(serverConfig, field).currentLevel,
                0
            ),
        wood: village.fields
            .filter((field) => field.type === 'wood')
            .reduce(
                (production, field) =>
                    production +
                    getProductionInfo(serverConfig, field).currentLevel,
                0
            ),
        iron: village.fields
            .filter((field) => field.type === 'iron')
            .reduce(
                (production, field) =>
                    production +
                    getProductionInfo(serverConfig, field).currentLevel,
                0
            ),
    }
}
