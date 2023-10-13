const response = await fetch('https://raw.githubusercontent.com/fpalaciosFM/PracticaLSM/VectorTest/Resources/Json/RandomWords/word_list_json.json');

if(!response.ok){
    throw new Error('Error! status: ${response.status}');
}

const word_list_json = response.json();
console.log(word_list_json);

const item = word_list_json.word_list[Math.floor(Math.random()*word_list_json.word_list.length)];
console.log(item);

document.getElementById('word').value = item.id;