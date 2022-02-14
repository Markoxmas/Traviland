export default function getUpgradeCost(serverConfig, field) {
    const config = serverConfig[field.type.toUpperCase()]
    return {
        clay: Math.floor(
            config.CLAY_A1 * config.CLAY_K ** field.temporaryLevel
        ),
        iron: Math.floor(
            config.IRON_A1 * config.IRON_K ** field.temporaryLevel
        ),
        wood: Math.floor(
            config.WOOD_A1 * config.WOOD_K ** field.temporaryLevel
        ),
        time: Math.floor(
            (config.TIME_A1 / serverConfig.SERVER_SPEED) *
                config.TIME_K ** field.temporaryLevel
        ),
    }
}
