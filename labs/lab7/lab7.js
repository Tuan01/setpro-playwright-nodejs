const readlineSync = require('readline-sync');

function groupWords(){
    const groupedWords = {};
    console.log(groupedWords.abc)


    const userInput = readlineSync.question('Your sentence: ');
    const words = userInput.split(' ');
    words.forEach(function (word){
        if(groupedWords[word]){
            groupedWords[word]++;
        } else{
            groupedWords[word] = 1;
        }
    });

    console.log(groupedWords)

}

groupWords();