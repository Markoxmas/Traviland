export default function upgradeMaxResources(village, serverConfig) {
    const warehouse = village.fields.filter(
        (field) => field.type === 'warehouse'
    )[0]
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
