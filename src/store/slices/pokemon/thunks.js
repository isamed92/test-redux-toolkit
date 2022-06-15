import { pokemonApi } from "../../../api/pokemonAPI";
import { setPokemon, startLoadingPokemon } from "./pokemonSlice"



export const getPokemon = (page = 0) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingPokemon());
        // TODO : realizar action http

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`)
        // const data = await resp.json()
        const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)
        // console.log(data)
        dispatch(setPokemon({
            pokemon: data.results,
            page: page + 1
        }))
    }
}