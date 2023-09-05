const { ApolloServer, gql } = require('apollo-server');

const fs = require('fs');
const path = require('path');

const typeDefs = gql(fs.readFileSync(path.join(__dirname, '../interfaces/graphql/schema.graphql'), 'utf8'));
const resolvers = require('../interfaces/graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
});