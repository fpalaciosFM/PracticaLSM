fetch('https://raw.githubusercontent.com/fpalaciosFM/PracticaLSM/VectorTest/Resources/Json/RandomWords/RandomWords.js')
    .then((response) => response.json())
    .then((json) => console.log(json))