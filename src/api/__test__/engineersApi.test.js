/* eslint-env jest */

const engineersApi = require('../engineersApi')
jest.mock('../request')

// Test GetEngineer
describe('#getEngineers() using promises', () => {
  it('should load a list of engineers', ()=>{
    return engineersApi.getEngineers()
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.length).toBeGreaterThan(0)
    })
  })
})
