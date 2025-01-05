

let wordPairs = [];        // initialize the table
let currentWordIndex = 0;  // current word index

function addWords() {
    const input = document.getElementById('word-list').value;
    wordPairs = input.split(',').map(word => word.trim()); // split and trim the words
    if (wordPairs.length % 2 !== 0) {
        alert("Anna sanat muodossa: sana,käännös,sana,käännös...");
        return;
    } 
}

function showWords() {
    document.getElementById("show").innerHTML = wordPairs;
}

function startPractice() {
    // search for a user-entered word list
    const input = document.getElementById('word-list').value;
    // form the table
    wordPairs = [];
    for (let i = 0; i < input.split(',').length; i += 2) {
        wordPairs.push({ english: input.split(',')[i].trim(), finnish: input.split(',')[i + 1].trim() });
    }

    currentWordIndex = 0;
    document.getElementById('input-section').style.display = 'none';
    document.getElementById('practice-section').style.display = 'block';
    showNextWord();
}

function showNextWord() {
        document.getElementById('word-to-translate').innerText = `Käännä: ${wordPairs[currentWordIndex].english}`;
        document.getElementById('user-translation').value = ''; //empties the user translation input field
        document.getElementById('feedback').innerText = '';   //empties the feedback area
        document.getElementById('show-words').style.display = 'none';
}

function stopPractise(){
    document.getElementById('practice-section').innerHTML = "<p>Harjoittelu on ohi! Hienosti jaksoit harjoitella!</p>";
    // "show the results"
}

function checkAnswer() {
    const userAnswer = document.getElementById('user-translation').value.trim(); //removes whitespace from both sides of a string
    const correctAnswer = wordPairs[currentWordIndex].finnish;
    let numberOfWordpairs = wordPairs.length -1;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('feedback').innerText = "Oikein!";
        //currentWordIndex++;
        currentWordIndex = Math.floor(Math.random() * numberOfWordpairs) + 1; //provides a random index from the wordPair-table
        setTimeout(showNextWord, 1000);
    } else {
        document.getElementById('feedback').innerText = `Väärin. Oikea vastaus on "${correctAnswer}".`;
        setTimeout(showNextWord, 2000);
    }
}
