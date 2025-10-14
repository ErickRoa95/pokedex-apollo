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
    }
  },
  Mutation:{
    addPokemon: async (_, {input}) =>{
      const newPokemon = new Pokemons({
        name: input.name, 
        ability: input.ability, 
        pokedex_id: input.pokedex_id,
        pokemon_types: input.pokemon_types,
      });
      newPokemon.id = newPokemon._id;
      try{
        await newPokemon.save();
        return newPokemon;
      }catch(error){
        throw new Error(error);
      }
    },
    updatePokemon: async (_, {input}) => {
      try{
        const updatePokemon = await Pokemons.findOneAndUpdate(
         { pokedex_id: input.pokedex_id},
         input,
         {new: true}
        )
        return updatePokemon;
      }catch(error){
        throw new Error(error);
      }
    },
    deletePokemon: async(_, {pokedex_id}) =>{
      try{
        await Pokemons.deleteOne({
          pokedex_id: pokedex_id,
        })
        return `Pokemon Id deleted: ${pokedex_id}`;
      }catch(error){
        throw Error(error);
      }
    }
  }
}

export default pokemonResolvers;