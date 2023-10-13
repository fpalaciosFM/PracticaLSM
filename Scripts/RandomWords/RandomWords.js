const response = await fetch('https://raw.githubusercontent.com/fpalaciosFM/PracticaLSM/VectorTest/Resources/Json/RandomWords/word_list.json');

if(!response.ok){
    throw new Error('Error! status: ${response.status}');
}

const word_list = response.json();
console.log(word_list);

const item = word_list[Math.floor(Math.random()*word_list.length)];
console.log(item);

document.getElementById('word').value = item.id;