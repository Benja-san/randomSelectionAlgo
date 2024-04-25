console.log("File loaded")

const ragnar = {
  name: "Ragnar",
  class: "Viking",
  pv: 200,
  atk: 15,
  stm: 13,
  int: 9,
}

const jeanPaul = {
  name: "jeanPaul",
  class: "Mage",
  pv: 100,
  atk: 9,
  stm: 10,
  int: 15,
}

const characters = []
characters.push(ragnar, jeanPaul)

const charactersContainer = document.getElementById("charactersContainer")

// for (let i = 0; i < characters.length; i++) {
//   console.log(characters[i])
// }

// for (let character of characters) {
//   console.log(character)
// }

// for (key in ragnar) {
//   console.log(key + " : ", ragnar[key])
// }

characters.map((character) => {
  //console.log(`Hello I'm ${character.name}, I'm a ${character.class}`)
})

const warriors = characters.filter((character) => {
  return character.atk > 11 && character.pv > 150
})

const wilders = [
  "camille",
  "carlos",
  "fatimata",
  "ergy",
  "virginie",
  "sebastien",
  "cyril",
  "sid-Ahmed",
  "anass",
  "marwa",
  "filip",
  "salma",
  "lucie",
  "clotilde",
  "sirine",
]

let imunedWilders = []

if (localStorage.getItem("wilders")) {
  //Add imuned wilders into the imuned wilders array
  imunedWilders = localStorage.getItem("wilders").split(",")

  //Loop on imuned wilders array in order to remove'em from wilders array
  imunedWilders.map((wilderToRemove) => {
    const chosenWilderPosition = wilders.indexOf(wilderToRemove)
    const updatedWilders = wilders.splice(chosenWilderPosition, 1)
  })
}

function pickWilder(array) {
  const chosenWilder = array[Math.floor(Math.random() * array.length)]
  const chosenWilderPosition = array.indexOf(chosenWilder)
  const updatedWilders = array.splice(chosenWilderPosition, 1)

  imunedWilders.push(chosenWilder)
  localStorage.setItem("wilders", imunedWilders)

  return chosenWilder
}

// while (wilders.length >= 2) {
//   const wildersSelected = `This week ${pickWilder(wilders)} and ${pickWilder(
//     wilders
//   )} have been chosen !`

//   console.log(wildersSelected)
// }

const wildersSelected = `This week ${pickWilder(wilders)} and ${pickWilder(
  wilders
)} have been chosen !`

console.log(wildersSelected)
