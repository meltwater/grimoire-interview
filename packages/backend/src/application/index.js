const fs = require("fs");
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql(
  fs.readFileSync("./src/interfaces/graphql/schema.graphql", {
    encoding: "utf8",
  })
);
const resolvers = require("../interfaces/graphql/resolvers");

const app = express();

app.use("/assets", express.static("assets"));

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
    console.log(`📁 Static assets at http://localhost:${PORT}/assets`);
  });
})();
