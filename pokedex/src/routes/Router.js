import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PokedexScreen from '../screens/PokedexScreen/PokedexScreen'
import PokemonDetailScreen from '../screens/PokemonDetailScreen/PokemonDetailScreen'
import PokemonListScreen from '../screens/PokemonListScreen/PokemonListScreen'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PokemonListScreen/>}/>
                <Route  path={"/pokemon/:name"} element={<PokemonDetailScreen/>}/>
                <Route  path={"/pokedex"} element={<PokedexScreen/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router

