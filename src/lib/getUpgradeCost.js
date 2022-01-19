export default function getUpgradeCost(serverConfig, field) {
    const config = serverConfig[field.type.toUpperCase()]
    return {
        clay: Math.floor(config.CLAY_A1 * config.CLAY_K ** field.level),
        iron: Math.floor(config.IRON_A1 * config.IRON_K ** field.level),
        wood: Math.floor(config.WOOD_A1 * config.WOOD_K ** field.level),
        time: Math.floor(config.TIME_A1 * config.TIME_K ** field.level),
    }
}
