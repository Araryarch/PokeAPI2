const fetchAPI = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36")
    const data = await response.json()

    const cardsContainer = document.querySelector(".card-wrapper")
    cardsContainer.innerHTML = ""

    for (const pokemon of data.results) {
      const pokemonResponse = await fetch(pokemon.url)
      const pokemonData = await pokemonResponse.json()

      const card = document.createElement("div")
      card.classList.add("card")

      const cardName = document.createElement("div")
      cardName.classList.add("name")
      cardName.textContent = pokemonData.name

      const cardImage = document.createElement("img")
      cardImage.classList.add("image")
      cardImage.src = pokemonData.sprites.front_default

      const cardType = document.createElement("div")
      cardType.classList.add("type")

      const type = pokemonData.types.map((type) => type.type.name).join(", ")
      const theme = type.split(", ")[0].toUpperCase()

      card.classList.add(theme)
      cardType.textContent = type

      card.appendChild(cardName)
      card.appendChild(cardImage)
      card.appendChild(cardType)

      cardsContainer.appendChild(card)
    }

    const cards = document.querySelectorAll(".card")
    cards.forEach((card) => {
      card.style.display = "flex"
    })
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}
