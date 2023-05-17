import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import { ListCardsContainer } from '../../components/PokemonCard.js/styled'
import PokemonCard from '../../components/PokemonCard.js/PokemonCard'
import GlobalStateContext from '../../global/GlobalStateContext'
import { goToPokedex } from '../../routes/coordinator'
import { useNavigate } from "react-router-dom"

const PokemonListScreen = () => {
    const {pokemons} = useContext(GlobalStateContext)
    const navigator = useNavigate()
    return (
    <>
        <Header 
        title={"Lista de Pokémons"}
        leftButtonFunction={() => goToPokedex(navigator)}
        />

        <ListCardsContainer>
            {
            pokemons.map((poke) => {
                return <PokemonCard key={poke.name} pokemon={poke}/>
            })
            }
        
        
        </ListCardsContainer>
    </>
    )
}

export default PokemonListScreen