import canBeUpgraded from '../../lib/canBeUpgraded.js'

describe('Tests for lib function canBeUpgraded', () => {
    it('Returns true when resources are enough', () => {
        //Arrange
        const cost = {
            clay: 200,
            wood: 250,
            iron: 300,
        }
        const village = {
            resources: {
                clay: 300,
                wood: 300,
                iron: 300,
            },
        }
        const expectedResult = true
        //Act
        const result = canBeUpgraded(cost, village)
        //Assert
        expect(result).toBe(expectedResult)
    })

    it('Return false when one of the resources is too low', () => {
        //Arrange
        const cost = {
            clay: 300,
            wood: 400,
            iron: 500,
        }
        const village = {
            resources: {
                clay: 200,
                wood: 500,
                iron: 600,
            },
        }
        const expectedResult = false
        //Act
        const result = canBeUpgraded(cost, village)
        //Assert
        expect(result).toBe(expectedResult)
    })
})
