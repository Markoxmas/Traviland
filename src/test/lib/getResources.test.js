import getResources from '../../lib/getResources'

describe('Tests for lib function getResources', () => {
    it('should calculate resources correctly when they do not exceed max resources', () => {
        //Arrange
        const atTime = new Date().getTime()
        const village = {
            maxResources: {
                clay: 30000,
                wood: 30000,
                iron: 30000,
            },
            production: {
                //per hour
                clay: 4200,
                wood: 5376,
                iron: 7654,
            },
            checkpoint: {
                clay: 100,
                wood: 100,
                iron: 100,
                time: atTime - 10800000, //3 hours ago in ms
            },
        }
        const expectedResult = {
            clay: 12700,
            wood: 16228,
            iron: 23062,
        }
        //Act
        const result = getResources(village, atTime)
        //Assert
        expect(result).toStrictEqual(expectedResult)
    })

    it('should calculate resources correctly when they exceed max resources', () => {
        //Arrange
        const atTime = new Date().getTime()
        const village = {
            maxResources: {
                clay: 1500,
                wood: 1500,
                iron: 1500,
            },
            production: {
                //per hour
                clay: 4200,
                wood: 5376,
                iron: 7654,
            },
            checkpoint: {
                clay: 100,
                wood: 100,
                iron: 100,
                time: atTime - 10800000, //3 hours ago in ms
            },
        }
        const expectedResult = {
            clay: 1500,
            wood: 1500,
            iron: 1500,
        }
        //Act
        const result = getResources(village, atTime)
        //Assert
        expect(result).toStrictEqual(expectedResult)
    })
})
