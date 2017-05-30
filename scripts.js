const resetBtn = document.getElementById('resetBtn');
const startBtn = document.getElementById('startBtn');

const instructions = document.getElementById('instructions');
const results = document.getElementById('results');

const choices = ['cowboy', 'ninja', 'bear'];

let userPoints = 0;
let computerPoints = 0;

// "start game" button
startBtn.addEventListener('click', function(){
	document.querySelector('.inner').classList.add('active');
	document.getElementById('score').classList.add('show');
});

// define user choices and listen for click event
const userChoices = document.querySelectorAll('#choices > button');
userChoices.forEach(choice => choice.addEventListener('click', runGame));

// set user choice based on button clicked and computer choice from array
function runGame(){
	// user choice from button ID
	let userChoice = this.id;
	
	// computer choice randomly chosen from array
	let computerChoice = choices[Math.floor(Math.random() * choices.length)];
	
	// disable choice buttons
	userChoices.forEach(choice => choice.setAttribute('disabled', true));
	
	// display results
	resetBtn.classList.add('ease');
	showResults(`you chose <strong>${userChoice}</strong>`);
	showResults(`computer chose <strong>${computerChoice}`);
	
	// compare user and computer choice
	if(userChoice === computerChoice) { 
	// is it a tie?
	  showResults("The result is a tie!");
	} else { 
	// if choices are different
		if(userChoice === "cowboy") {
			if(computerChoice === "bear") {
	  		showResults("cowboy wins!");
	  		userPoints++;
	  	} else {
	  		showResults("ninja wins!");
	  		computerPoints++;
	  	}
		} else if(userChoice === "ninja") {
			if(computerChoice === "cowboy") {
	  		showResults("ninja wins!");
	  		userPoints++;
	  	} else {
	    	showResults("bear wins!");
	    	computerPoints++;
	  	}  
		} else if(userChoice == "bear") {
			if(computerChoice === "ninja"){
	  		showResults("bears wins!");
	  		userPoints++;
			} else {
	  		showResults("cowboy wins!");
	  		computerPoints++;
	  	}	
		}
	}
	
	// update score
	document.getElementById('userScore').innerHTML = userPoints;
	document.getElementById('computerScore').innerHTML = computerPoints;
	
	// show reset button
	resetBtn.classList.add('show');
}

// display game choices and winner		
function showResults(value) {
	results.innerHTML += "<p>" + value + "</p>";
}



// show/hide instructions
document.getElementById('instructionsBtn').addEventListener('click', function(){
	instructions.classList.add('show');
});

document.querySelector('#instructions > a').addEventListener('click', function(){
	instructions.classList.remove('show');
})


// reset button
resetBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('transitionend', function(){
	this.classList.remove('ease');
});

function resetGame() {
	results.innerHTML = "";
	resetBtn.classList.remove('show');
	userChoices.forEach(choice => choice.removeAttribute('disabled'));
}
