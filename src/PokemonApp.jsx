import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from './store/slices/pokemon';

export const PokemonApp = () => {

  const dispatch = useDispatch()

  const {isLoading, pokemon, page} = useSelector(state => state.pokemon)


  useEffect(() => {
    dispatch(getPokemon())
  },[]);

  return (
    <>
        <h1>Pokemon app</h1>
        <hr/>

        <span>Loading: {isLoading ? 'Verdadero' : 'Falso'}</span>
        <ul>
            {pokemon.map((pokemon, idx) => {
              return (<li key={idx}>{pokemon.name}</li>)
            })}
        </ul>

        <button disabled={isLoading} onClick={() => dispatch(getPokemon(page))}> Siguiente </button>
    </>
  )
}
