
let results = {
    category: '',
    type: '',
    question: '',
    difficulty: '',
    correct_answer: '',
    incorrect_answers: ['', '', ''],
};



const apiUrlRand = 'https://opentdb.com/api.php?amount=1&type=multiple&encode=base64';

const apiUrlAnimal = 'https://opentdb.com/api.php?amount=1&category=27&type=multiple&encode=base64';

const apiUrlAnime = 'https://opentdb.com/api.php?amount=1&category=31&type=multiple&encode=base64';

const apiUrlArt = 'https://opentdb.com/api.php?amount=1&category=25&type=multiple&encode=base64';

const apiUrlBooks = 'https://opentdb.com/api.php?amount=1&category=10&type=multiple&encode=base64';

const apiUrlCartoon = 'https://opentdb.com/api.php?amount=1&category=32&type=multiple&encode=base64';

const apiUrlFilm = 'https://opentdb.com/api.php?amount=1&category=11&type=multiple&encode=base64';

const apiUrlGadg = 'https://opentdb.com/api.php?amount=1&category=30&type=multiple&encode=base64';

const apiUrlGen = 'https://opentdb.com/api.php?amount=1&category=9&type=multiple&encode=base64';

const apiUrlGeo = 'https://opentdb.com/api.php?amount=1&category=22&type=multiple&encode=base64';

const apiUrlHist = 'https://opentdb.com/api.php?amount=1&category=23&type=multiple&encode=base64';

const apiUrlMyth = 'https://opentdb.com/api.php?amount=1&category=20&type=multiple&encode=base64';

const apiUrlSci = 'https://opentdb.com/api.php?amount=1&category=17&type=multiple&encode=base64';

const apiUrlSpor = 'https://opentdb.com/api.php?amount=1&category=21&type=multiple&encode=base64';

const apiUrlVehi = 'https://opentdb.com/api.php?amount=1&category=28&type=multiple&encode=base64';

const apiUrlVideo = 'https://opentdb.com/api.php?amount=1&category=15&type=multiple&encode=base64';

let json;

const GetFromApi = async function() {
    // Fetch request TO the API
    const response = await fetch(apiUrlRand)

        // API fetch request waits to receive data before continuing
        json = await response.json();

        // After the API receives the request, the function newQuestion() executes
        newQuestion();

        // Logs the information received from the API in the console
        console.log(json) 
}

let newQuestion = function() {

    // Constant variables which corresponds to where the API information received will be
    // placed on the webpage
    const diff = document.getElementById('diff');
    const quest = document.getElementById('question');
    
    // atob() function decodes the information received from the api
    diff.innerText = 'Difficulty: ' + atob(json.results[0].difficulty);
    quest.innerText = atob(json.results[0].question);
    
    // Set the options to each question into an array for positioning purposes with the 
    // function setContentRandom()
    let options = [atob(json.results[0].correct_answer), 
                    atob(json.results[0].incorrect_answers[0]), 
                    atob(json.results[0].incorrect_answers[1]), 
                    atob(json.results[0].incorrect_answers[2])]

    // Executes the functions setContentRandom
    setContentRandom(options); 
}

let setContentRandom = function(options) {
    
    let used = new Array();
    // For loop iterates through the the options array
    for(let i = 0; i < options.length; i++) {
        // Randomizes the order
        let randomNum = Math.floor(Math.random() * (4 - 0));
        
        // While the random number has already been used
        while(used.includes(randomNum)) {
            // Generates a new random number
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        // Pushes the random order to the array 'used'
        used.push(randomNum);

        let element = document.getElementById(randomNum);
        // Sets the randomized content in the options array
        element.innerText = options[i];
    }
}

let reveal = function() {
    // Sets the 'correct' variable to the correct answer pulled from the API
    let correct = atob(json.results[0].correct_answer);
    
    // Var x is set to the correct answer box with the id 'reveal'
    var x = document.getElementById('reveal');

    // 'If' control structure sets the display styling of the answer box
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    // Sets the inner text of the element by ID reveal to the correct answer pulled from the API
    document.getElementById('reveal').innerText = correct;    
}

document.getElementById('new-question').addEventListener('click', GetFromApi);

document.getElementById('reveal0').addEventListener('click', reveal);

let json1;

const GetFromApiAnim = async function() {
    const response = await fetch(apiUrlAnimal)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json1 = await response.json();
        newQuestionAnim();
        console.log(json1) 
}

let newQuestionAnim = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json1.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json1.results[0].difficulty);

    let options = [atob(json1.results[0].correct_answer), 
                    atob(json1.results[0].incorrect_answers[0]), 
                    atob(json1.results[0].incorrect_answers[1]), 
                    atob(json1.results[0].incorrect_answers[2])]

    setContentRandomAnim(options);
    

    
}

let setContentRandomAnim = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealAnim = function() {

    let correct = atob(json1.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiAnim);

document.getElementById('reveal0').addEventListener('click', revealAnim);

let json2;

const GetFromApiAnime = async function() {
    const response = await fetch(apiUrlAnime)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json2 = await response.json();
        newQuestionAnime();
        console.log(json2) 
}

let newQuestionAnime = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json2.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json2.results[0].difficulty);

    let options = [atob(json2.results[0].correct_answer), 
                    atob(json2.results[0].incorrect_answers[0]), 
                    atob(json2.results[0].incorrect_answers[1]), 
                    atob(json2.results[0].incorrect_answers[2])]

    setContentRandomAnime(options);
    

    
}

let setContentRandomAnime = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealAnime = function() {

    let correct = atob(json2.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiAnime);

document.getElementById('reveal0').addEventListener('click', revealAnime);

let json3;

const GetFromApiArt = async function() {
    const response = await fetch(apiUrlArt)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json3 = await response.json();
        newQuestionArt();
        console.log(json3) 
}

let newQuestionArt = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json3.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json3.results[0].difficulty);

    let options = [atob(json3.results[0].correct_answer), 
                    atob(json3.results[0].incorrect_answers[0]), 
                    atob(json3.results[0].incorrect_answers[1]), 
                    atob(json3.results[0].incorrect_answers[2])]

    setContentRandomArt(options);
    

    
}

let setContentRandomArt = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealArt = function() {

    let correct = atob(json3.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiArt);

document.getElementById('reveal0').addEventListener('click', revealArt);

let json4;

const GetFromApiBook = async function() {
    const response = await fetch(apiUrlBooks)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json4 = await response.json();
        newQuestionBook();
        console.log(json4) 
}

let newQuestionBook = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json4.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json4.results[0].difficulty);

    let options = [atob(json4.results[0].correct_answer), 
                    atob(json4.results[0].incorrect_answers[0]), 
                    atob(json4.results[0].incorrect_answers[1]), 
                    atob(json4.results[0].incorrect_answers[2])]

    setContentRandomBook(options);
    
}

let setContentRandomBook = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealBook = function() {

    let correct = atob(json4.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiBook);

document.getElementById('reveal0').addEventListener('click', revealBook);

let json5;

const GetFromApiCart = async function() {
    const response = await fetch(apiUrlCartoon)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json5 = await response.json();
        newQuestionCart();
        console.log(json5) 
}

let newQuestionCart = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json5.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json5.results[0].difficulty);

    let options = [atob(json5.results[0].correct_answer), 
                    atob(json5.results[0].incorrect_answers[0]), 
                    atob(json5.results[0].incorrect_answers[1]), 
                    atob(json5.results[0].incorrect_answers[2])]

    setContentRandomCart(options);
    
}

let setContentRandomCart = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealCart = function() {

    let correct = atob(json5.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiCart);

document.getElementById('reveal0').addEventListener('click', revealCart);

let json6;

const GetFromApiFilm = async function() {
    const response = await fetch(apiUrlFilm)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json6 = await response.json();
        newQuestionFilm();
        console.log(json6) 
}

let newQuestionFilm = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json6.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json6.results[0].difficulty);

    let options = [atob(json6.results[0].correct_answer), 
                    atob(json6.results[0].incorrect_answers[0]), 
                    atob(json6.results[0].incorrect_answers[1]), 
                    atob(json6.results[0].incorrect_answers[2])]

    setContentRandomFilm(options);
    
}

let setContentRandomFilm = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealFilm = function() {

    let correct = atob(json6.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiFilm);

document.getElementById('reveal0').addEventListener('click', revealFilm);

let json7;

const GetFromApiGadg = async function() {
    const response = await fetch(apiUrlGadg)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json7 = await response.json();
        newQuestionGadg();
        console.log(json7) 
}

let newQuestionGadg = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json7.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json7.results[0].difficulty);

    let options = [atob(json7.results[0].correct_answer), 
                    atob(json7.results[0].incorrect_answers[0]), 
                    atob(json7.results[0].incorrect_answers[1]), 
                    atob(json7.results[0].incorrect_answers[2])]

    setContentRandomGadg(options);
    
}

let setContentRandomGadg = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealGadg = function() {

    let correct = atob(json7.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiGadg);

document.getElementById('reveal0').addEventListener('click', revealGadg);

let json8;

const GetFromApiGen = async function() {
    const response = await fetch(apiUrlGen)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json8 = await response.json();
        newQuestionGen();
        console.log(json8) 
}

let newQuestionGen = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json8.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json8.results[0].difficulty);

    let options = [atob(json8.results[0].correct_answer), 
                    atob(json8.results[0].incorrect_answers[0]), 
                    atob(json8.results[0].incorrect_answers[1]), 
                    atob(json8.results[0].incorrect_answers[2])]

    setContentRandomGen(options);
    
}

let setContentRandomGen = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealGen = function() {

    let correct = atob(json8.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiGen);

document.getElementById('reveal0').addEventListener('click', revealGen);

let json9;

const GetFromApiGeo = async function() {
    const response = await fetch(apiUrlGeo)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json9 = await response.json();
        newQuestionGeo();
        console.log(json9) 
}

let newQuestionGeo = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json9.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json9.results[0].difficulty);

    let options = [atob(json9.results[0].correct_answer), 
                    atob(json9.results[0].incorrect_answers[0]), 
                    atob(json9.results[0].incorrect_answers[1]), 
                    atob(json9.results[0].incorrect_answers[2])]

    setContentRandomGeo(options);
    
}

let setContentRandomGeo = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealGeo = function() {

    let correct = atob(json9.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiGeo);

document.getElementById('reveal0').addEventListener('click', revealGeo);

let json10;

const GetFromApiHist = async function() {
    const response = await fetch(apiUrlHist)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json10 = await response.json();
        newQuestionHist();
        console.log(json10) 
}

let newQuestionHist = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json10.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json10.results[0].difficulty);

    let options = [atob(json10.results[0].correct_answer), 
                    atob(json10.results[0].incorrect_answers[0]), 
                    atob(json10.results[0].incorrect_answers[1]), 
                    atob(json10.results[0].incorrect_answers[2])]

    setContentRandomHist(options);
    
}

let setContentRandomHist = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealHist = function() {

    let correct = atob(json10.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiHist);

document.getElementById('reveal0').addEventListener('click', revealHist);

let json11;

const GetFromApiMyth = async function() {
    const response = await fetch(apiUrlMyth)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json11 = await response.json();
        newQuestionMyth();
        console.log(json11) 
}

let newQuestionMyth = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json11.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json11.results[0].difficulty);

    let options = [atob(json11.results[0].correct_answer), 
                    atob(json11.results[0].incorrect_answers[0]), 
                    atob(json11.results[0].incorrect_answers[1]), 
                    atob(json11.results[0].incorrect_answers[2])]

    setContentRandomMyth(options);
    
}

let setContentRandomMyth = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealMyth = function() {

    let correct = atob(json11.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiMyth);

document.getElementById('reveal0').addEventListener('click', revealMyth);

let json12;

const GetFromApiSci = async function() {
    const response = await fetch(apiUrlSci)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json12 = await response.json();
        newQuestionSci();
        console.log(json12) 
}

let newQuestionSci = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json12.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json12.results[0].difficulty);

    let options = [atob(json12.results[0].correct_answer), 
                    atob(json12.results[0].incorrect_answers[0]), 
                    atob(json12.results[0].incorrect_answers[1]), 
                    atob(json12.results[0].incorrect_answers[2])]

    setContentRandomSci(options);
    
}

let setContentRandomSci = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealSci = function() {

    let correct = atob(json12.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiSci);

document.getElementById('reveal0').addEventListener('click', revealSci);

let json13;

const GetFromApiSpor = async function() {
    const response = await fetch(apiUrlSpor)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json13 = await response.json();
        newQuestionSpor();
        console.log(json13) 
}

let newQuestionSpor = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json13.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json13.results[0].difficulty);

    let options = [atob(json13.results[0].correct_answer), 
                    atob(json13.results[0].incorrect_answers[0]), 
                    atob(json13.results[0].incorrect_answers[1]), 
                    atob(json13.results[0].incorrect_answers[2])]

    setContentRandomSci(options);
    
}

let setContentRandomSpor = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealSpor = function() {

    let correct = atob(json13.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiSpor);

document.getElementById('reveal0').addEventListener('click', revealSpor);

let json14;

const GetFromApiVehi = async function() {
    const response = await fetch(apiUrlVehi)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json14 = await response.json();
        newQuestionVehi();
        console.log(json14) 
}

let newQuestionVehi = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json14.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json14.results[0].difficulty);

    let options = [atob(json14.results[0].correct_answer), 
                    atob(json14.results[0].incorrect_answers[0]), 
                    atob(json14.results[0].incorrect_answers[1]), 
                    atob(json14.results[0].incorrect_answers[2])]

    setContentRandomVehi(options);
    
}

let setContentRandomVehi = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealVehi = function() {

    let correct = atob(json14.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiVehi);

document.getElementById('reveal0').addEventListener('click', revealVehi);

let json15;

const GetFromApiVideo = async function() {
    const response = await fetch(apiUrlVideo)
        //get raw data from the API and then wait
        //for the response to come in before continuing
        json15 = await response.json();
        newQuestionVideo();
        console.log(json15) 
}

let newQuestionVideo = function() {

    const quest = document.getElementById('question');
    const diff = document.getElementById('diff');

    quest.innerText = atob(json15.results[0].question);
    diff.innerText = 'Difficulty: ' + atob(json15.results[0].difficulty);

    let options = [atob(json15.results[0].correct_answer), 
                    atob(json15.results[0].incorrect_answers[0]), 
                    atob(json15.results[0].incorrect_answers[1]), 
                    atob(json15.results[0].incorrect_answers[2])]

    setContentRandomVideo(options);
    
}

let setContentRandomVideo = function(options) {
    let used = new Array();
    for(let i = 0; i < options.length; i++) {
 
        let randomNum = Math.floor(Math.random() * (4 - 0));
 
        while(used.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (4 - 0));
        }
        used.push(randomNum);
        let element = document.getElementById(randomNum);
        element.innerText = options[i];
    }
}

let revealVideo = function() {

    let correct = atob(json15.results[0].correct_answer);
    

    var x = document.getElementById('reveal');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById('reveal').innerText = correct;
    
}

document.getElementById('new-question').addEventListener('click', GetFromApiVideo);

document.getElementById('reveal0').addEventListener('click', revealVideo);




// Sets the distance of the top of the element from the top of the elements
// original position
var topDown = 0;

var myMove = function() {

    // Increases the distance of the top of the elemnt from the top of the elements
    // original position, therefore moving the object
    topDown = topDown + 1.2;

    // Stops the function from continuing once the topDown value reaches 150
    if(topDown >= 150) {
        return;
    }
    // Update the top position of the element position to the new element value
    document.getElementById('question').style.top = topDown + 'px';

    // Allows the element to continously move by setting a "timeout" before the function is repeated
    // The second parameter is is the time between each call of the function, 1 ten-thousandth of a second
    setTimeout(myMove, .1);
}

var leftRight = 0;

var myMove1 = function() {

    leftRight = leftRight + 3.6;

    if(leftRight >= 450) {
        return;
    }

    document.getElementById('options').style.left = leftRight + 'px';

    setTimeout(myMove1, .1);
}



function fade() {
    // Initial opacity 
    var op = 1;  
    // Timer is a setInterval function that 
    var timer = setInterval(function () {
        // Function clears the interval and sets the display to none
        if (op <= 0.1){
            clearInterval(timer);
            document.getElementById('question').style.display = 'none';
        }
        // Sets opacity of the element
        document.getElementById('question').style.opacity = op;
        document.getElementById('question').style.filter = 'alpha(opacity=' + op * 100 + ")";
        // Multiplies the Initial opacity value by 0.2 and subtracts that from the op value
        op -= op * 0.2;
        // The interval of the function is set to half of a tenth of a second
    }, 50);
}

function fade1() {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            document.getElementById('options').style.display = 'none';
        }
        document.getElementById('options').style.opacity = op;
        document.getElementById('options').style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.2;
    }, 50);
}

