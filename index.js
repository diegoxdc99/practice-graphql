const { buildSchema } = require('graphql');
const express = require('express');
const gqlMiddleware = require('express-graphql');

const app = express();
const port = process.env.port || 3000;


// define schema
const schema = buildSchema(`
  type Query {
    hello: String,
    bye: String
  }
`);

// Configure resolvers
const resolvers = {
  hello: () => 'Hello world',
  bye: () => 'Good bye',
};

app.use('/api', gqlMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: true, // graphql development environment (browser)
}));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});

// Execute query hello
// I can choose the variables that I need through the query
// graphql(schema, '{ hello, bye }', resolvers).then((data) => {
//   console.log(data);
// });
