export default function getUnitCost(serverConfig, field) {
    const { UNITS } = serverConfig
    if (field.type === 'barracks') {
        return {
            dog: {
                clay: UNITS.DOG.CLAY,
                iron: UNITS.DOG.IRON,
                wood: UNITS.DOG.WOOD,
                time: getUnitTimeCost(serverConfig, field, 'dog'),
            },
            cat: {
                clay: UNITS.CAT.CLAY,
                iron: UNITS.CAT.IRON,
                wood: UNITS.CAT.WOOD,
                time: getUnitTimeCost(serverConfig, field, 'cat'),
            },
            lizard: {
                clay: UNITS.LIZARD.CLAY,
                iron: UNITS.LIZARD.IRON,
                wood: UNITS.LIZARD.WOOD,
                time: getUnitTimeCost(serverConfig, field, 'lizard'),
            },
            pidgeon: {
                clay: UNITS.PIDGEON.CLAY,
                iron: UNITS.PIDGEON.IRON,
                wood: UNITS.PIDGEON.WOOD,
                time: getUnitTimeCost(serverConfig, field, 'pidgeon'),
            },
        }
    } else if (field.type === 'stable') {
        return {
            horse: {
                clay: UNITS.HORSE.CLAY,
                iron: UNITS.HORSE.IRON,
                wood: UNITS.HORSE.WOOD,
                time: getUnitTimeCost(serverConfig, field, 'horse'),
            },
            catapult: {
                clay: UNITS.CATAPULT.CLAY,
                iron: UNITS.CATAPULT.IRON,
                wood: UNITS.CATAPULT.WOOD,
                time: getUnitTimeCost(serverConfig, field, 'catapult'),
            },
            aligator: {
                clay: UNITS.ALIGATOR.CLAY,
                iron: UNITS.ALIGATOR.IRON,
                wood: UNITS.ALIGATOR.WOOD,
                time: getUnitTimeCost(serverConfig, field, 'aligator'),
            },
        }
    }
}

function getUnitTimeCost(serverConfig, field, unit) {
    const config = serverConfig.UNITS[unit.toUpperCase()]
    return Math.floor(
        config.TIME *
            (1.0 -
                field.level * serverConfig[field.type.toUpperCase()].DECREASE)
    )
}
