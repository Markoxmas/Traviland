export default function getProductionInfo(serverConfig, field) {
    const config = serverConfig[field.type.toUpperCase()]
    return {
        currentLevel: Math.floor(
            serverConfig.SERVER_SPEED *
                config[`PROD_${field.type.toUpperCase()}_A1`] *
                config[`PROD_${field.type.toUpperCase()}_K`] **
                    (field.level - 1)
        ),
        nextLevel: Math.floor(
            serverConfig.SERVER_SPEED *
                config[`PROD_${field.type.toUpperCase()}_A1`] *
                config[`PROD_${field.type.toUpperCase()}_K`] ** field.level
        ),
    }
}
