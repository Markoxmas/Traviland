import formatNumber from '../../lib/formatNumber'

describe('Tests for lib function formatNumber', () => {
    it('should convert numbers correctly', () => {
        //Arrange
        const number = 5432
        const thousands = 435234
        const millions = 5432867
        const expectedNumber = 5432
        const expectedThousands = '435k'
        const expectedMillions = '5m'
        //Act
        const numberResult = formatNumber(number)
        const thousandsResult = formatNumber(thousands)
        const millionsResult = formatNumber(millions)
        //Assert
        expect(numberResult).toBe(expectedNumber)
        expect(thousandsResult).toBe(expectedThousands)
        expect(millionsResult).toBe(expectedMillions)
    })
})
