const fs = require('fs')

const request = (url) => new Promise((resolve, reject) => {
  // Get engineerID from supplied url string
  const lastSlash = url.lastIndexOf('/')
  const engineerID = url.substring(lastSlash + 1)

  // TODO: mock multiple api paths

  if(!engineerID){
    fs.readFile(`./src/api/__mockData__/engineers.json`, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve({ entity: JSON.parse(data) })
    })
  } else {
    fs.readFile(`./src/api/__mockData__/${engineerID}.json`, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve({ entity: JSON.parse(data) })
    })
  }
})

export default request
