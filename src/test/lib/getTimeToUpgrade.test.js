import getTimeToUpgrade from '../../lib/getTimeToUpgrade'

describe('Tests for lib function getTimeToUpgrade', () => {
    it('should calculate time to upgrade correctly', () => {
        //Arrange
        const now = new Date().getTime()
        const village = {
            checkpoint: {
                clay: 400,
                wood: 300,
                iron: 500,
                time: now,
            },
            production: {
                clay: 100,
                wood: 100,
                iron: 100,
            },
            maxResources: {
                clay: 5000,
                wood: 5000,
                iron: 5000,
            },
        }
        const cost = {
            clay: 500,
            wood: 500,
            iron: 500,
        }
        const expectedResult = 7200000 //ms - 2 hours
        //Act
        const result = getTimeToUpgrade(village, cost)
        //Assert
        expect(result).toBe(expectedResult)
    })

    it('should return time in amount of zero when time is negative', () => {
        //Arrange
        const now = new Date().getTime()
        const village = {
            checkpoint: {
                clay: 1000,
                iron: 1000,
                wood: 1000,
                time: now,
            },
            production: {
                clay: 500,
                wood: 400,
                iron: 300,
            },
            maxResources: {
                clay: 5000,
                wood: 5000,
                iron: 5000,
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
