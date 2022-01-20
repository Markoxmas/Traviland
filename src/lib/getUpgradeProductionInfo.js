export default function getUpgradeProductionInfo(serverConfig, field) {
    const config = serverConfig[field.type.toUpperCase()]
    return {
        currentLevel: Math.floor(
            config[`PROD_${field.type.toUpperCase()}_A1`] *
                config[`PROD_${field.type.toUpperCase()}_K`] **
                    (field.level - 1)
        ),
        nextLevel: Math.floor(
            config[`PROD_${field.type.toUpperCase()}_A1`] *
                config[`PROD_${field.type.toUpperCase()}_K`] ** field.level
        ),
    }
}
