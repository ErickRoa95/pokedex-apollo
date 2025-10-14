import { Pokemons } from "../../dbConnector";

// Apollo Server Resolvers returns:
/*
/ parent
/ args
/ contextValue
/ information.
*/
const pokemonResolvers = {
  Query: {
    getPokemon: async (_, {id} ) =>{
      try {
        const result = await Pokemons.findById(id);
        console.log("Pokemon has been found"+result);
        return result;
      }catch(error){
        throw new Error(error);
      }
    },
  }
}

export default pokemonResolvers;