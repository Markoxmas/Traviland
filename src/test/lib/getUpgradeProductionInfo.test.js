import getUpgradeProductionInfo from '../../lib/getUpgradeProductionInfo'

describe('Tests for lib function getUpgradeProductionInfo', () => {
    it('should correctly return current and next level production for a specific field', () => {
        //Arrange
        const serverConfig = {
            CLAY: {
                PROD_CLAY_A1: 100,
                PROD_CLAY_K: 1.05,
            },
        }
        const field = {
            type: 'clay',
            level: 4,
        }
        const expectedResult = {
            currentLevel: 115,
            nextLevel: 121,
        }
        //Act
        const result = getUpgradeProductionInfo(serverConfig, field)
        //Assert
        expect(result).toStrictEqual(expectedResult)
    })
})
