import React from 'react'
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from './styled'
import { useNavigate} from "react-router-dom"
import { goToPokedex } from '../../routes/coordinator'

const Header = ({ title, leftButtonFunction, showRightButton }) => {
  const navigator = useNavigate()

  const leftButtonTitle = () => {
    switch(title){
      case "Lista de Pokémons":
        return "Ir para Pokédex";
      case "Pokédex":
        return "Voltar para lista de pokémons";
        default:
          return "voltar"
    }
  }

  return (
    <HeaderContainer>
        <LeftHeaderButton onClick={leftButtonFunction}>
          {leftButtonTitle()}
        </LeftHeaderButton>
        <h1>{title}</h1>
        { showRightButton && 
        <RightHeaderButton onClick={() => navigator("/pokedex")}>
        ir para pokedex
      </RightHeaderButton>
      }
    </HeaderContainer>
  )
}

export default Header