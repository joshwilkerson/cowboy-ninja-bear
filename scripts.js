const resetBtn = document.getElementById('resetBtn');
const startBtn = document.getElementById('startBtn');

const instructions = document.getElementById('instructions');
const results = document.getElementById('results');

// game choices
const choices = ['cowboy', 'ninja', 'bear'];


startBtn.addEventListener('click', function(){
	document.querySelector('.inner').classList.add('active');
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
	showResults(compare(userChoice,computerChoice));
	
	// show reset button
	resetBtn.classList.add('show');
}

// display game choices and winner		
function showResults(value) {
	results.innerHTML += "<p>" + value + "</p>";
}


// compare user and computer choices
let compare = function(choice1,choice2) {
	if(choice1 === choice2) {
	  return "The result is a tie!";
	}
		
	if(choice1 === "cowboy") {
		if(choice2 === "bear") {
  		return "cowboy wins!";
  	} else {
  		return "ninja wins!";
  	}
	} else if(choice1 === "ninja") {
		if(choice2 === "cowboy") {
  		return "ninja wins!";
  	} else {
    	return "bear wins!";
  	}  
	} else {
		if(choice2 === "cowboy"){
  		return "cowboy wins!";
		} else {
  		return "bear wins!";
  	}	
	}
}


function resetGame(){
	results.innerHTML = "";
	resetBtn.classList.remove('show');
	userChoices.forEach(choice => choice.removeAttribute('disabled'));
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
