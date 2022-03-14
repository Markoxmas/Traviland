import uuid from 'react-uuid'
import addTimer from '../../mock-backend/timers/addTimer'
import deleteTimer from '../../mock-backend/timers/deleteTimer'

describe('Tests for timer functions in mock-backend (adding, deleting)', () => {
    it('should correctly add first timer', () => {
        //Arrange
        const timers = []
        /** newTimerData properties:
         * type (village, army, armyUpgrade, marketplace, palace),
         * length, villageId, fieldId
         * */
        const newTimerData = {
            type: 'village',
            length: 10000,
            villageId: 1,
            fieldId: 2,
        }
        const expectedResult = {
            type: newTimerData.type,
            displayLength: newTimerData.length,
            length: newTimerData.length,
            villageId: newTimerData.villageId,
            fieldId: newTimerData.fieldId,
        }
        //Act
        const result = addTimer(timers, newTimerData)
        const firstTimer = result[0]
        //Assert
        expect(result).toHaveLength(1)
        expect(typeof firstTimer.id).toEqual(typeof uuid()) //uuid
        expect(firstTimer.type).toEqual(expectedResult.type)
        expect(firstTimer.displayLength).toEqual(expectedResult.displayLength)
        expect(firstTimer.length).toEqual(firstTimer.displayLength)
        expect(firstTimer.villageId).toEqual(expectedResult.villageId)
        expect(firstTimer.fieldId).toEqual(expectedResult.fieldId)
    })

    it('should correctly add second timer', () => {
        //Arrange
        const timers = [
            {
                id: uuid(),
                type: 'village',
                displayStartTime: new Date().getTime(),
                displayLength: 10000,
                length: 10000,
                villageId: 1,
                fieldId: 2,
            },
        ]
        const newTimerData = {
            type: 'village',
            length: 10000,
            villageId: 1,
            fieldId: 3,
        }
        //For 2nd item
        const expectedResult = {
            type: newTimerData.type,
            displayLength: timers[0].length + newTimerData.length,
            length: newTimerData.length,
            villageId: newTimerData.villageId,
            fieldId: newTimerData.fieldId,
        }
        //Act
        const result = addTimer(timers, newTimerData)
        const firstTimer = result[0]
        const secondItem = result[1]
        //Assert
        expect(result.length).toEqual(2)
        expect(firstTimer).toEqual(timers[0])
        expect(secondItem.displayLength).toEqual(expectedResult.displayLength)
        expect(secondItem.length).toEqual(expectedResult.length)
        expect(secondItem.villageId).toEqual(expectedResult.villageId)
        expect(secondItem.fieldId).toEqual(expectedResult.fieldId)
    })

    it('should correctly add first timer of different type', () => {
        //Arrange
        const timers = [
            {
                id: uuid(),
                type: 'village',
                displayStartTime: new Date().getTime(),
                displayLength: 10000,
                length: 10000,
                villageId: 1,
                fieldId: 2,
            },
        ]
        const newTimerData = {
            type: 'army',
            length: 10000,
            villageId: 1,
            fieldId: 3,
        }
        // For new timer
        const expectedResult = {
            type: newTimerData.type,
            displayLength: newTimerData.length,
            length: newTimerData.length,
            villageId: newTimerData.villageId,
            fieldId: newTimerData.fieldId,
        }
        //Act
        const result = addTimer(timers, newTimerData)
        const firstTimer = result[0]
        const newTimer = result[1]
        //Assert
        expect(result.length).toEqual(2)
        expect(firstTimer).toEqual(timers[0])
        expect(newTimer.type).toEqual(expectedResult.type)
        expect(newTimer.length).toEqual(expectedResult.length)
        expect(newTimer.displayLength).toEqual(expectedResult.displayLength)
        expect(newTimer.villageId).toEqual(expectedResult.villageId)
        expect(newTimer.fieldId).toEqual(expectedResult.fieldId)
    })

    it('should delete the only timer', () => {
        //Arrange
        const timer = {
            id: uuid(),
            type: 'village',
            displayStartTime: new Date().getTime(),
            displayLength: 10000,
            length: 10000,
            villageId: 1,
            fieldId: 2,
        }
        const timers = [timer]
        //Act
        const result = deleteTimer(timers, timer)
        //Assert
        expect(result.length).toEqual(0)
    })

    it('should delete first timer of two', () => {
        //Arrange
        const now = new Date().getTime()
        const firstTimer = {
            id: uuid(),
            type: 'village',
            displayStartTime: now,
            displayLength: 10000,
            length: 10000,
            villageId: 1,
            fieldId: 1,
        }
        const secondTimer = {
            id: uuid(),
            type: 'village',
            displayStartTime: now,
            displayLength: 20000,
            length: 10000,
            villageId: 1,
            fieldId: 2,
        }
        const timers = [firstTimer, secondTimer]
        const expectedResult = [
            {
                ...secondTimer,
                displayLength: secondTimer.displayLength - firstTimer.length,
            },
        ]
        //Act
        const result = deleteTimer(timers, firstTimer)
        //Assert
        expect(result.length).toEqual(1)
        expect(result[0].displayLength).toEqual(expectedResult[0].displayLength)
        expect(result[0].length).toEqual(expectedResult[0].length)
        expect(result[0].fieldId).toEqual(expectedResult[0].fieldId)
    })

    it('should delete second timer from multiple types of timers', () => {
        const startTimeOne = new Date().getTime()
        const startTimeTwo = startTimeOne - 3000
        const firstTimer = {
            id: uuid(),
            type: 'village',
            displayStartTime: startTimeOne,
            displayLength: 10000,
            length: 10000,
            villageId: 1,
            fieldId: 1,
        }
        const secondTimer = {
            id: uuid(),
            type: 'village',
            displayStartTime: startTimeOne,
            displayLength: 20000,
            length: 10000,
            villageId: 1,
            fieldId: 2,
        }
        const thirdTimer = {
            id: uuid(),
            type: 'army',
            displayStartTime: startTimeTwo,
            displayLength: 30000,
            length: 30000,
            villageId: 1,
            fieldId: 3,
        }
        const timers = [firstTimer, secondTimer, thirdTimer]
        const expectedResult = [
            {
                ...secondTimer,
                displayLength: secondTimer.displayLength - firstTimer.length,
            },
            thirdTimer,
        ]
        //Act
        const result = deleteTimer(timers, firstTimer)
        //Assert
        expect(result.length).toEqual(2)
        expect(secondTimer.id).toEqual(expectedResult[0].id)
        expect(thirdTimer.id).toEqual(expectedResult[1].id)
        expect(result[0].displayLength).toEqual(expectedResult[0].displayLength)
        expect(result[1].displayLength).toEqual(expectedResult[1].displayLength)
    })
})
