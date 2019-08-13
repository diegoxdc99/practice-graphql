const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const gqlMiddleware = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers'); // Configure resolvers

const app = express();
const port = process.env.port || 3000;

// define schema
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8',
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

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
