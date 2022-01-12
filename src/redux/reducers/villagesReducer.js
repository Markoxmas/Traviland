import CONST from '../constants'

const initialState = [
    getDefaultVillage(1, 'Main village'),
    getDefaultVillage(2, 'Second village'),
    getDefaultVillage(3, 'Third village'),
]

const villagesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CONST.UPGRADE_SUCCESS:
            return state.map((village) =>
                village.id === action.village.id ? action.village : village
            )
        default:
            return state
    }
}

export default villagesReducer

function getDefaultVillage(id, name) {
    return {
        id: id,
        name: name,
        resources: {
            clay: 750,
            wood: 750,
            iron: 750,
        },
        maxResources: {
            clay: 1500,
            wood: 1500,
            iron: 1500,
        },
        production: {
            clay: 10,
            wood: 10,
            iron: 10,
        },
        resourceFields: [
            {
                id: 1,
                level: 1,
                type: 'clay',
            },
            {
                id: 2,
                level: 1,
                type: 'clay',
            },
            {
                id: 3,
                level: 1,
                type: 'clay',
            },
            {
                id: 4,
                level: 1,
                type: 'clay',
            },
            {
                id: 5,
                level: 1,
                type: 'clay',
            },
            {
                id: 6,
                level: 1,
                type: 'wood',
            },
            {
                id: 7,
                level: 1,
                type: 'wood',
            },
            {
                id: 8,
                level: 1,
                type: 'wood',
            },
            {
                id: 9,
                level: 1,
                type: 'wood',
            },
            {
                id: 10,
                level: 1,
                type: 'wood',
            },
            {
                id: 11,
                level: 1,
                type: 'iron',
            },
            {
                id: 12,
                level: 1,
                type: 'iron',
            },
            {
                id: 13,
                level: 1,
                type: 'iron',
            },
            {
                id: 14,
                level: 1,
                type: 'iron',
            },
            {
                id: 15,
                level: 1,
                type: 'iron',
            },
        ],
        buildings: [],
        timers: [],
    }
}
