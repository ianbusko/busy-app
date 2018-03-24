# Mock API for Busy App #
This project will initialize a mock API for use with the Busy App. It will return a list of engineers and the properties for a user.

## Getting Started ##
```
yarn
npm run generate-mock-data
npm run start-mockapi
Load http://localhost:3001/engineers
```

The current endpoint is `localhost:3001/engineers`. It serves up a set of engineers with `id`, `name`, and `email`. Drill down into a user's information using the path `/engineers/{userID}`.
