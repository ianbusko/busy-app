/* eslint-env jest */

const engineersApi = require('../engineersApi')
jest.mock('../request')

// Test GetEngineers
describe('#getEngineers() using promises', () => {
  it('should load a list of engineers', ()=>{
    return engineersApi.getEngineers()
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.length).toBeGreaterThan(0)
    })
  })
})

// Test GetEngineer
describe('#getEngineer() using promises', () => {
  it('should load an engineer', ()=>{
    return engineersApi.getEngineer(2597479)
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.name).toEqual("James");
    })
  })
})
