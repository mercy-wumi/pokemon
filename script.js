const container = document.querySelector('#container')

const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


for (let i = 1; i <= 100; i++) {
    const pokemon = document.createElement('div')
    const pokeImg = document.createElement('img')
    const label = document.createElement('span')

    label.innerText = `${i}`
    pokeImg.src = `${baseURL}${i}.png`

    container.appendChild(pokemon)
    pokemon.classList.add('pokemon')
    pokemon.appendChild(pokeImg)
    pokemon.appendChild(label)
}

