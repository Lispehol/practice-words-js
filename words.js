

let wordPairs = [];        // Alustetaan sanapari-taulukko
let currentWordIndex = 0;  // Tämänhetkinen sanan indeksi

function addWords() {
    const input = document.getElementById('word-list').value;
    let wordArray = input.split(',').map(word => word.trim());
   // wordPairs = input.split(',').map(word => word.trim()); // Pilko ja trimmaa sanat
    wordPairs = wordArray.concat(wordPairs); // Pilko ja trimmaa sanat
  /*   if (wordPairs.length % 2 !== 0) {
        alert("Anna sanat muodossa: sana,käännös,sana,käännös...");
        return;
    } */
}

function showWords() {
    document.getElementById("show").innerHTML = wordPairs;
}

function startPractice() {
    // Hae käyttäjän syöttämä sanalista
    const input = document.getElementById('word-list').value;
 /*    wordPairs = input.split(',').map(word => word.trim()); // Pilko ja trimmaa sanat
    if (wordPairs.length % 2 !== 0) {
        alert("Anna sanat muodossa: sana,käännös,sana,käännös...");
        return;
    }
 */
    // Muodosta sanapari-taulukko
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
    if (currentWordIndex < wordPairs.length) {
        document.getElementById('word-to-translate').innerText = `Käännä: ${wordPairs[currentWordIndex].english}`;
        document.getElementById('user-translation').value = '';
        document.getElementById('feedback').innerText = '';
    } else {
        document.getElementById('practice-section').innerHTML = "<p>Harjoittelu on ohi! Hyvin tehty!</p>";
    }
}
function stopPractise(){
    document.getElementById('practice-section').innerHTML = "<p>Harjoittelu on ohi! Hyvin tehty!</p>";
    //tähän "näytä tulokset"

}

function checkAnswer() {
    const userAnswer = document.getElementById('user-translation').value.trim();
    const correctAnswer = wordPairs[currentWordIndex].finnish;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('feedback').innerText = "Oikein!";
        currentWordIndex++;
        //currentWordIndex = Math.floor(Math.random() * 10);
        setTimeout(showNextWord, 1000);
    } else {
        document.getElementById('feedback').innerText = `Väärin. Oikea vastaus on "${correctAnswer}".`;
        setTimeout(showNextWord, 2000);
    }
}
