# Practice-graphql

This repository is the practice of the platzi course related to graphql

## **Command to generate the project:**
Create a mit license, create a gitignore file for node and initialize the project with NPM
**command: **npx license mit > LICENSE && npx gitignore node && npm init -y


## Lint
I used Eslint to guarantee the programming style

**Command:** eslint --init

## QUERY
example with interfaces
```graphql
{
  getPeople {
    _id
    name
    email
    ... on Monitor {
      phone
    }
    ... on Student {
      avatar
    }
  }
}
```

## MUTATION
Example with query variables
```graphql
mutation createNewMonitor($monitorinput: PersonInput!) {
  createPerson(input: $monitorinput) {
    _id
    name
  }
}
```

query variable:
```json
{
  "monitorinput": {
    "name": "Monitor 1",
    "email": "monitor1@gmail.com",
    "phone": "303030303"
  }
}
```
