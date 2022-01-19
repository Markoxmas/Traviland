import getTimeToUpgrade from '../../lib/getTimeToUpgrade'

describe('Tests for lib function getTimeToUpgrade', () => {
    it('should calculate time to upgrade correctly', () => {
        //Arrange
        const village = {
            resources: {
                clay: 600,
                wood: 300,
                iron: 400,
            },
            production: {
                clay: 100,
                wood: 100,
                iron: 100,
            },
        }
        const cost = {
            clay: 500,
            wood: 500,
            iron: 500,
        }
        const expectedResult = 7200000 //ms
        //Act
        const result = getTimeToUpgrade(village, cost)
        //Assert
        expect(result).toBe(expectedResult)
    })

    it('should return time in amount of zero when time is negative', () => {
        //Arrange
        const village = {
            resources: {
                clay: 1000,
                iron: 1000,
                wood: 1000,
            },
            production: {
                clay: 500,
                wood: 400,
                iron: 300,
            },
        }
        const cost = {
            clay: 100,
            wood: 100,
            iron: 100,
        }
        const expectedResult = 0 //ms
        //Act
        const result = getTimeToUpgrade(village, cost)
        //Assert
        expect(result).toBe(expectedResult)
    })
})
