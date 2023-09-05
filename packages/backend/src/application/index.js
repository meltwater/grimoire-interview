const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql(require('../interfaces/graphql/schema.graphql'));
const resolvers = require('../interfaces/graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({
    port: 4000,    
}).then(({ url }) => {
    console.log("Server ready!")
});