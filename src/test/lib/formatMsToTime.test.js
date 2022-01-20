import formatMsToTime from '../../lib/formatMsToTime'

describe('Tests for lib function getResources', () => {
    it('should convert time in ms to format 3h 0m 12s', () => {
        //Arrange
        const ms = 10812000
        const expectedResult = '3h 0m 12s'
        //Act
        const result = formatMsToTime(ms)
        //Assert
        expect(result).toBe(expectedResult)
    })
})
