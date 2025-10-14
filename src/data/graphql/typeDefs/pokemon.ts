import {gql} from "apollo-server-express";

const pokemonSchema = gql` #gql
  type Query{
    getPokemon(id: ID): Pokemon 
  }

  type Pokemon {
    id: ID!
    pokedex_id: Int!
    name: String!
    ability: String!
    pokemon_types: [PokemonType]!
  }

  type PokemonType{
    pokemon_type: Element
  }

  enum Element {
    DARK
    DRAGON
    FIGHTING
    FIRE
    GRASS
    PSYCHIC
    WATER
    BUG
    ELECTRIC
    FLYING
    GHOST
    GROUND
    POISON
    ROCK
    STEEL
    FAIRY
    NORMAL
    ICE
  }

  input PokemonInput {
    id: ID
    pokedex_id: Int!
    name: String!
    ability: String!
    pokemon_types: [PokemonTypeInput]!
  }

  input PokemonTypeInput{
    pokemon_type: Element
  }

  type Mutation{
    addPokemon(input: PokemonInput): Pokemon
    updatePokemon(input: PokemonInput): Pokemon
  }
`;

export default pokemonSchema;