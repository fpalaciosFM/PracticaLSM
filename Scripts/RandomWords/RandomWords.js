fetch('https://raw.githubusercontent.com/fpalaciosFM/PracticaLSM/VectorTest/Resources/Json/RandomWords/word_list.json')
    .then((response) => response.json())
    .then((json) => console.log(json))