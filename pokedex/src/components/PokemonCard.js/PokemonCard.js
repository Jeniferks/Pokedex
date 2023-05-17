import React from 'react'
import { ImgContainer, PokemonCardContainer, PokemonImg, ButtonsContainer } from './styled'
import { goToPokemonDetail, goToPokedex } from "../../routes/coordinator"
import {useNavigate} from "react-router-dom"

const PokemonCard = ({pokemon, name}) => {
  const navigator = useNavigate()

  return (
    <PokemonCardContainer>
      <ImgContainer>
        <PokemonImg
        src={pokemon.sprites && pokemon.sprites.front_default}
        alt={pokemon.name}
        />
      </ImgContainer>
      <ButtonsContainer>
        <button onClick={() => goToPokedex(navigator(`/pokedex`))}>Adicionar a Pokedex</button>
        <button onClick={() => goToPokemonDetail(navigator(`/pokemon/${pokemon.name}`))}>Ver detalhes</button>
      </ButtonsContainer>

    </PokemonCardContainer>
  )
}

export default PokemonCard