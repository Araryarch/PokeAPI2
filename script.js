const fetchAPI = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  const data = await response.json()

  const card = document.querySelector(".card")
  card.style.display = "flex"
  const cardName = document.querySelector(".name")
  const cardImage = document.querySelector(".image")
  const cardType = document.querySelector(".type")

  const number = data.id
  const name = data.name
  const image = data.sprites.front_default
  const type = data.types[0].type.name

  cardName.textContent = number + ": " + name
  cardImage.src = image
  cardType.textContent = "Type:" + " " + type
}
