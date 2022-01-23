export default function getProductionInfo(serverConfig, field) {
    const config = serverConfig[field.type.toUpperCase()]
    return {
        currentLevel: Math.floor(
            config[`PROD_${field.type.toUpperCase()}_A1`] *
                config[`PROD_${field.type.toUpperCase()}_K`] **
                    (field.level - 1) *
                serverConfig.SERVER_SPEED
        ),
        nextLevel: Math.floor(
            config[`PROD_${field.type.toUpperCase()}_A1`] *
                config[`PROD_${field.type.toUpperCase()}_K`] ** field.level *
                serverConfig.SERVER_SPEED
        ),
    }
}
