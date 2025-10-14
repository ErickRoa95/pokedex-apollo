import { Int32 } from "bson";
import mongoose from "mongoose";

async function connectMongo() {
  try{
    // authSource=admin, since the root user is created on the admin database from docker.
    await mongoose.connect('mongodb://root:password@localhost:27017/pokedex?authSource=admin');
    console.log('Connected to MongoDB')
  }catch(error){
    console.log('Error connecting to MongoDB:' + error);
  }
}

connectMongo();

const pokemonSchema = new mongoose.Schema({
  pokedex_id: Int32,
  name: String,
  ability: String,
  pokemon_types: Array,
});

const Pokemons = mongoose.model('pokemons', pokemonSchema);

export {Pokemons};
