const resetBtn = document.getElementById('resetBtn');
const instructions = document.getElementById('instructions');

// set available options
const computerChoices = ['cowboy', 'ninja', 'bear'];
	
// define user choices and listen for click event
const userChoices = document.querySelectorAll('#choices > button');
userChoices.forEach(choice => choice.addEventListener('click', setUserChoice));

// set user choice based on button clicked and computer choice from array
function setUserChoice(){
	let userChoice = this.id;
	let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	
	showResults("you chose " + userChoice);
	showResults("computer chose " + computerChoice);
	showResults(compare(userChoice,computerChoice));
	showResetButton();
}

// display game choices and winner		
const results = document.getElementById('results');
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


function showResetButton() {
	resetBtn.classList.add('show');
}

function resetGame(){
	results.innerHTML = "";
	resetBtn.classList.remove('show');
}


// show/hide instructions
document.getElementById('instructionsBtn').addEventListener('click', function(){
	instructions.classList.add('show');
});

document.querySelector('#instructions > a').addEventListener('click', function(){
	instructions.classList.remove('show');
})



// reset button
document.getElementById('resetBtn').addEventListener('click', resetGame);