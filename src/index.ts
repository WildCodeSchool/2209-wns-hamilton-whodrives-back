import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import typeDefs from "./schemas";
import resolvers from "./resolvers";
import datasource from './lib/datasource';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  // The `listen` method launches a web server.
server.listen().then(async ({ url }) => {

    await datasource.initialize();
    console.log(`🚀  Server ready at ${url}`);
  });