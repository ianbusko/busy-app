/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

const jsf = require('json-schema-faker');
const mockDataSchema = require('./mockSchema');
const fs = require('fs');

jsf.extend('faker', function() {
  return require('faker');
});

const json = JSON.stringify(jsf(mockDataSchema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});
