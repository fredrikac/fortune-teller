//Get the html elements
const fortuneBtn = document.getElementById("getFortuneBtn");
const fortuneDisplay = document.getElementById("fortune");
let timeout;

function getFortune(){
    let randomMsg = shuffle(Array.from(loading));
    fortuneDisplay.innerHTML = randomMsg[0];
    fortuneDisplay.style.fontStyle = "italic";

    clearTimeout(timeout);

    timeout = setTimeout(function(){
        let yourFortune = shuffle(Array.from(responses));//create copy to not mutate the original array
        fortuneDisplay.textContent = yourFortune[0];
        fortuneDisplay.style.fontStyle = "normal";
    }, 2000);
}

//shuffling algorithm Fisher-Yates
function shuffle (array) {

	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

//when user clicks button, getFortune
fortuneBtn.addEventListener("click", getFortune);

// The fortune responses
let responses = [
	'It is certain.',
	'It is decidedly so.',
	'Without a doubt.',
	'Yes - definitely.',
	'You may rely on it.',
	'As I see it, yes.',
	'Most likely.',
	'Outlook good.',
	'Yes.',
	'Signs point to yes.',
	'Reply hazy, try again.',
	'Ask again later.',
	'Better not tell you now.',
	'Cannot predict now.',
	'Concentrate and ask again.',
	'Don\'t count on it.',
	'My reply is no.',
	'My sources say no.',
	'Outlook not so good.',
	'Very doubtful.'
];

let loading = [
	'Consulting the spirits...',
	'Gazing into the depths of the future...',
	'BRB, jumping into my time machine...',
	'I see... I see...'
];

