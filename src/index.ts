import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './data/graphql/typeDefs';
import resolvers from './data/graphql/resolvers';



async function startApolloServer(){
  const app = express();
  const PORT= "4000";

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // start apollo server
  await server.start();
  // apply middle ware of apollo server (in this case Express endpoints.)
  server.applyMiddleware({app});  

  app.get("/health", (_, res) => res.send("Server OK"));

  // Express server call. 
  app.listen(PORT, ()=>{
    console.log(`Server ready at http://localhost:${PORT}/${server.graphqlPath}`);
  });
}

startApolloServer();