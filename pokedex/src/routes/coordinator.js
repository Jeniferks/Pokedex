

export const goToPokemonList = (navigator) => {
  navigator.push("/")
};

export const goToPokemonDetail = (navigator, name) => {
  navigator.push(`/pokemon/${name}`)
};

export const goToPokedex = (navigator) => {
  navigator.push("/pokedex")
};