  
const Manager = require('../lib/Manager')
const { it } = require('@jest/globals')


describe('getOfficeNumber', () => {
  test('should return officeNumber', () => {
    expect(Manager.officeNumber)
  })
})