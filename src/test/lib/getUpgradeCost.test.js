import getUpgradeCost from '../../lib/getUpgradeCost'

describe('Tests for lib function getUpgradeCost', () => {
    it('should correctly return cost for fields', () => {
        //Arrange
        const serverConfig = {
            CLAY: {
                CLAY_A1: 100,
                CLAY_K: 1.05,
                WOOD_A1: 120,
                WOOD_K: 1.1,
                IRON_A1: 200,
                IRON_K: 1.07,
                TIME_A1: 10000,
                TIME_K: 1.2,
            },
        }
        const field = {
            type: 'clay',
            level: 4,
        }
        const expectedResult = {
            clay: 121,
            wood: 175,
            iron: 262,
            time: 20736,
        }
        //Act
        const result = getUpgradeCost(serverConfig, field)
        //Assert
        expect(result).toStrictEqual(expectedResult)
    })
})
