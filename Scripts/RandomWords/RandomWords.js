fetch('https://raw.githubusercontent.com/fpalaciosFM/PracticaLSM/VectorTest/Resources/Json/RandomWords/RandomWords.json')
    .then((response) => response.json())
    .then((json) => console.log(json))