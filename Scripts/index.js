fetch('https://raw.githubusercontent.com/fpalaciosFM/PracticaLSM/VectorTest/Resources/Json/Testing/test.json')
    .then((response) => response.json())
    .then((json) => console.log(json))