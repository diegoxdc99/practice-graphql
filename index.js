'use strict'

const { graphql, buildSchema } = require('graphql');


//define schema
const schema = buildSchema(`
  type Query {
    hello: String,
    bye: String
  }
`);

//Configure resolvers
const resolvers = {
  hello: () => 'Hello world',
  bye: () => 'Good bye'
}

// Execute query hello
// I can choose the variables that I need through the query
graphql(schema, '{ hello, bye }', resolvers).then((data) => {
  console.log(data);
})