import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import datasource from "./lib/datasource";
import { getUser } from "./lib/utilities";
import typeDefs from "./schemas";
import resolvers from "./resolvers";
import { makeExecutableSchema } from "@graphql-tools/schema";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";

dotenv.config();

const corsConfig = {
  origin: ["http://localhost:3000", "https://studio.apollographql.com"],
  credentials: true,
};

//cette fonction permet de démarrer le serveur

async function startApolloServer() {
  const app = express();
  app.use(cors(corsConfig));
  app.use(cookieParser());
  app.use(graphqlUploadExpress());
  const httpServer = http.createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => {
      // permet de récupérer l'utilisateur connecté
      console.log("le token " + req.headers.authorization);
    
      let userLogged: any = await getUser(req.headers.authorization as string);
      console.log("user" , userLogged);
      //on retourne les infos de l'utilisateur connecté dans le contexte de l'application, ainsi on pourra les récupérer dans les resolvers
      return {
        req,
        res,
        userLogged,
      };
    },
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app, cors: false });

  const port = process.env.PORT || 4000;
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );

  console.log(
    `Serveur OK sur l'url suivante : http://localhost:${port}${server.graphqlPath}`
  );
  datasource.initialize();
}
startApolloServer();
