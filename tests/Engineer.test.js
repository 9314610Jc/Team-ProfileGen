const Engineer = require('../lib/Engineer')
const { it } = require('@jest/globals')

describe('getGithub', () => {
  test('should return github username', () => {
    expect(Engineer.github)
  })
})