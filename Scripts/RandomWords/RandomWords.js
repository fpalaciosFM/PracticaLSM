var response = fetch('https://raw.githubusercontent.com/fpalaciosFM/PracticaLSM/VectorTest/Resources/Json/RandomWords/word_list.json');
var word_list = response.json();

console.log(word_list);

var item = word_list[Math.floor(Math.random()*word_list.length)];

console.log(item);

document.getElementById("word").value = item.id;