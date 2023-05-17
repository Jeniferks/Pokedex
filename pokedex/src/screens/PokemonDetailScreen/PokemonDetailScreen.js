import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import 
{ PokeInfoContainer,
  ImagesContainer, 
  ImgWrapper, 
  StatsContainer, 
  TitleContainer, 
  TypesAndMovesContainer, 
  TypesContainer, 
  MovesContainer } from "../PokemonDetailScreen/styled"
  import {useParams, useNavigate} from "react-router-dom"
import GlobalStateContext from '../../global/GlobalStateContext'
import { goToPokemonList } from '../../routes/coordinator'


const PokemonDetailScreen = () => {
  const {name} = useParams()
  const {pokemons} = useContext(GlobalStateContext)
  const [selectedPokemon, setSelectedPokemon] = useState([])
  const navigator = useNavigate()


  useEffect(() => {
    const currentPokemon  = pokemons.find((item) => {return item.name === name})
    setSelectedPokemon(currentPokemon)
  }, [])

  return (
    <div>
      <Header
      leftButtonFunction={() => navigator.goBack()} showRightButton
      />
      <PokeInfoContainer>
        {selectedPokemon && selectedPokemon.sprites &&
        <ImagesContainer>
          <ImgWrapper src={selectedPokemon.sprites.front_default}/>
          <ImgWrapper src={selectedPokemon.sprites.back_default}/>
        </ImagesContainer>
        }
        <StatsContainer>
          <TitleContainer>Poderes</TitleContainer>
          { selectedPokemon && selectedPokemon.stats &&
          
            selectedPokemon.stats.map((stat) => {
              return (
              <p key={stat.stat.name}>
                <strong>{stat.stat.name}: </strong> { stat.base_stat}

              </p>
              )
            })
          }
        </StatsContainer>
        <TypesAndMovesContainer>
          <TypesContainer>
            {selectedPokemon && selectedPokemon.types &&
            selectedPokemon.types.map((type) => {
              return (
                <p key={type.type.name}>{type.type.name}</p>
              ) 
            })
            }
              
            </TypesContainer>
          <MovesContainer>
          <TitleContainer>Principais ataques</TitleContainer>
          {
            selectedPokemon && selectedPokemon.moves &&
            selectedPokemon.moves.map((move, index) => {
              return(
                index < 5 && <p key={move.move.name}>{move.move.name}</p>
              )
            })
          }
          </MovesContainer>
        </TypesAndMovesContainer>
      </PokeInfoContainer>

      

    </div>
  )
}

export default PokemonDetailScreen