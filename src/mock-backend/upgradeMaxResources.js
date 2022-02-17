export default function upgradeMaxResources(village, serverConfig) {
    const warehouse = village.fields.find((field) => field.type === 'warehouse')
    const config = serverConfig[warehouse.type.toUpperCase()]

    const newValue = Math.floor(
        serverConfig.SERVER_SPEED *
            config.MAX_RES_A1 *
            config.MAX_RES_K ** (warehouse.level - 1)
    )

    return {
        clay: newValue,
        wood: newValue,
        iron: newValue,
    }
}
