export default function getUpgradeCost(serverConfig, field) {
    const config = serverConfig[field.type.toUpperCase()]
    return {
        clay: config.CLAY_A1 * config.CLAY_K ** (field.level - 1),
        iron: config.IRON_A1 * config.IRON_K ** (field.level - 1),
        wood: config.WOOD_A1 * config.WOOD_K ** (field.level - 1),
        time: config.TIME_A1 * config.TIME_K ** (field.level - 1),
    }
}
