export default function getBasicVillage(id, name) {
    const SERVER_SPEED = 1000
    return {
        id: id,
        name: name,
        maxResources: {
            clay: 100000,
            wood: 100000,
            iron: 100000,
        },
        production: {
            clay: 20 * SERVER_SPEED,
            wood: 20 * SERVER_SPEED,
            iron: 20 * SERVER_SPEED,
        },
        checkpoint: {
            clay: 30000,
            wood: 30000,
            iron: 30000,
            time: new Date().getTime(),
        },
        army: {
            dogs: 10000,
            cats: 10,
            lizards: 42353,
            pidgeons: 635,
            horses: 5345345,
            catapults: 432424234,
            aligators: 432,
        },
        units: {
            dog: {
                attack: 1,
                defense: 2,
            },
            cat: {
                attack: 3,
                defense: 4,
            },
            lizard: {
                attack: 5,
                defense: 6,
            },
            pidgeon: {
                attack: 7,
                defense: 8,
            },
            horse: {
                attack: 9,
                defense: 10,
            },
            catapult: {
                attack: 11,
                defense: 12,
            },
            aligator: {
                attack: 13,
                defense: 14,
            },
        },
        fields: [
            {
                id: 1,
                level: 1,
                temporaryLevel: 1,
                name: 'Clay',
                type: 'clay',
                color: 'rgba(255, 0, 0, 0.7)',
            },
            {
                id: 2,
                level: 1,
                temporaryLevel: 1,
                name: 'Clay',
                type: 'clay',
                color: 'rgba(255, 0, 0, 0.7)',
            },
            {
                id: 3,
                level: 1,
                temporaryLevel: 1,
                name: 'Clay',
                type: 'clay',
                color: 'rgba(255, 0, 0, 0.7)',
            },
            {
                id: 4,
                level: 1,
                temporaryLevel: 1,
                name: 'Clay',
                type: 'clay',
                color: 'rgba(255, 0, 0, 0.7)',
            },
            {
                id: 6,
                level: 1,
                temporaryLevel: 1,
                name: 'Wood',
                type: 'wood',
                color: 'rgba(0, 255, 0, 0.7)',
            },
            {
                id: 7,
                level: 1,
                temporaryLevel: 1,
                name: 'Wood',
                type: 'wood',
                color: 'rgba(0, 255, 0, 0.7)',
            },
            {
                id: 8,
                level: 1,
                temporaryLevel: 1,
                name: 'Wood',
                type: 'wood',
                color: 'rgba(0, 255, 0, 0.7)',
            },
            {
                id: 9,
                level: 1,
                temporaryLevel: 1,
                name: 'Wood',
                type: 'wood',
                color: 'rgba(0, 255, 0, 0.7)',
            },
            {
                id: 11,
                level: 1,
                temporaryLevel: 1,
                name: 'Iron',
                type: 'iron',
                color: 'rgba(0, 0, 255, 0.7)',
            },
            {
                id: 12,
                level: 1,
                temporaryLevel: 1,
                name: 'Iron',
                type: 'iron',
                color: 'rgba(0, 0, 255, 0.7)',
            },
            {
                id: 13,
                level: 1,
                temporaryLevel: 1,
                name: 'Iron',
                type: 'iron',
                color: 'rgba(0, 0, 255, 0.7)',
            },
            {
                id: 14,
                level: 1,
                temporaryLevel: 1,
                name: 'Iron',
                type: 'iron',
                color: 'rgba(0, 0, 255, 0.7)',
            },
            {
                id: 16,
                level: 1,
                temporaryLevel: 1,
                type: 'warehouse',
                name: 'Warehouse',
                color: 'rgba(165, 42, 42, 0.7)',
            },
            {
                id: 17,
                level: 1,
                temporaryLevel: 1,
                type: 'brickyard',
                name: 'Brickyard',
                color: 'rgba(165, 42, 42, 0.7)',
            },
            {
                id: 18,
                level: 1,
                temporaryLevel: 1,
                type: 'iron_foundry',
                name: 'Iron foundry',
                color: 'rgba(165, 42, 42, 0.7)',
            },
            {
                id: 19,
                level: 1,
                temporaryLevel: 1,
                type: 'sawmill',
                name: 'Sawmill',
                color: 'rgba(165, 42, 42, 0.7)',
            },
            {
                id: 20,
                level: 1,
                temporaryLevel: 1,
                type: 'barracks',
                name: 'Barracks',
                color: 'rgba(165, 42, 42, 0.7)',
            },
            {
                id: 21,
                level: 1,
                temporaryLevel: 1,
                type: 'stable',
                name: 'Stable',
                color: 'rgba(165, 42, 42, 0.7)',
            },
            {
                id: 22,
                level: 1,
                temporaryLevel: 1,
                type: 'blacksmith',
                name: 'Blacksmith',
                color: 'rgba(165, 42, 42, 0.7)',
            },
            {
                id: 23,
                level: 1,
                temporaryLevel: 1,
                type: 'armoury',
                name: 'Armoury',
                color: 'rgba(165, 42, 42, 0.7)',
            },
            {
                id: 24,
                level: 1,
                temporaryLevel: 1,
                type: 'rally_point',
                name: 'Rally point',
                color: 'rgba(165, 42, 42, 0.7)',
            },
            {
                id: 25,
                level: 1,
                temporaryLevel: 1,
                type: 'palace',
                name: 'Palace',
                color: 'rgba(165, 42, 42, 0.7)',
            },
            {
                id: 26,
                level: 1,
                temporaryLevel: 1,
                type: 'marketplace',
                name: 'Marketplace',
                color: 'rgba(165, 42, 42, 0.7)',
            },
            {
                id: 27,
                level: 1,
                temporaryLevel: 1,
                type: 'main_building',
                name: 'Main building',
                color: 'rgba(165, 42, 42, 0.7)',
            },
            {
                id: 28,
                level: 1,
                temporaryLevel: 1,
                type: 'wonder_of_the_world',
                name: 'Wonder of the world',
                color: 'rgba(165, 42, 42, 0.7)',
            },
        ],
        timers: [],
    }
}
