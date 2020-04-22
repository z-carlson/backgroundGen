const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const directions = document.querySelectorAll('button');


let currentDirection = 'to right';


for (const direction of directions) {
	direction.addEventListener("click", getDirection);
}

function setGradient(){
	body.style.background = 
	"linear-gradient(" + currentDirection + ", " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ " )";

	css.textContent = body.style.background + ";";
}

function getDirection() {
	let direction = event.target.id;
	if (direction === 'right') {
		currentDirection = "to right";
	} else if (direction === 'left') {
		currentDirection = "to left";
	} else if (direction === 'up') {
		currentDirection = "to top";
	} else {
		currentDirection = "to bottom";
	} 
	
	setGradient();
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)


