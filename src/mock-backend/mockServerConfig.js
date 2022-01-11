const SERVER_CONFIG = {
    //Upgrade requirements are calculated by geometric sequence an = a1 * k ^ (n - 1)
    WOOD: {
        WOOD_A1: 100,
        WOOD_K: 1.05,
        CLAY_A1: 100,
        CLAY_K: 1.07,
        IRON_A1: 120,
        IRON_K: 1.1,
    },
    CLAY: {
        WOOD_A1: 100,
        WOOD_K: 1.05,
        CLAY_A1: 100,
        CLAY_K: 1.07,
        IRON_A1: 120,
        IRON_K: 1.1,
    },
    IRON: {
        WOOD_A1: 100,
        WOOD_K: 1.05,
        CLAY_A1: 100,
        CLAY_K: 1.07,
        IRON_A1: 120,
        IRON_K: 1.1,
    },
}

export default SERVER_CONFIG
