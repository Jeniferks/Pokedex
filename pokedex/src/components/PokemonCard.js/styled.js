import styled from "styled-components"

export const PokemonCardContainer = styled.div`
    height: 35vh;
    width:250px;
    margin:10px;
    display: grid;
    grid-template-rows:90% 10%;
`

export const ImgContainer = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PokemonImg = styled.img`
    height:60%;
`

export const ButtonsContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr
`

export const ListCardsContainer = styled.div`
    width: 100vw;
    height: 92vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

