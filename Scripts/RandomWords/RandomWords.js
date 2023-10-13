fetch('https://raw.githubusercontent.com/fpalaciosFM/PracticaLSM/Resources/Json/RandomWords/RandomWords.js')
    .then((response) => response.json())
    .then((json) => console.log(json))