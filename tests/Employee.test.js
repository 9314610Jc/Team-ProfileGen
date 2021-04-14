const { TestWatcher } = require('@jest/core')
const { it } = require('@jest/globals')
const Employee = require('../lib/Employee')

describe('getName', () => {
  test('name of the employee', () => {
    expect(this.name)
  })
})

describe('getId', () => {
  test('id', () => {
    expect(this.id)
  })
})

describe('getEmail', () => {
  test('email', () => {
    expect(this.email)
  })
})

 describe('getRole', () => {
  test('role of the employee', () => {
    expect(this.role)
  })
 })