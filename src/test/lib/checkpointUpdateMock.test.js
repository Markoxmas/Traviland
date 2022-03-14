import updateCheckpoint from '../../mock-backend/timers/updateCheckpoint'

describe('Tests for checkpoint update function in mock-backend', () => {
    it("should update checkpoint with resource increase (don't go above maxResources)", () => {
        //Arrange
        const newTime = 370000
        const village = {
            checkpoint: {
                clay: 100,
                wood: 150,
                iron: 100,
                time: 10000,
            },
            production: {
                clay: 600,
                wood: 600,
                iron: 600,
            },
            maxResources: {
                clay: 300,
                wood: 300,
                iron: 300,
            },
        }
        const newCheckpoint = {
            clay: 100,
            iron: 100,
            wood: 100,
            time: newTime,
        }
        //new checkpoint
        const expectedResult = {
            clay: 260,
            wood: 300,
            iron: 260,
            time: newTime,
        }
        //Act
        const result = updateCheckpoint(village, newCheckpoint)
        //Assert
        expect(result).toEqual(expectedResult)
    })

    it('should update checkpoint with resource decrease', () => {
        //Arrange
        const newTime = 70000
        const village = {
            checkpoint: {
                clay: 100,
                wood: 150,
                iron: 100,
                time: 10000,
            },
            production: {
                clay: 600,
                wood: 600,
                iron: 600,
            },
            maxResources: {
                clay: 300,
                wood: 300,
                iron: 300,
            },
        }
        const newCheckpoint = {
            clay: -100,
            iron: -100,
            wood: -100,
            time: newTime,
        }
        //new checkpoint
        const expectedResult = {
            clay: 10,
            wood: 60,
            iron: 10,
            time: newTime,
        }
        //Act
        const result = updateCheckpoint(village, newCheckpoint)
        //Assert
        expect(result).toEqual(expectedResult)
    })
})
