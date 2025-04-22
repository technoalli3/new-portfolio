// JavaScript Document
	
function start() {
	document.getElementById("name").textContent = "TechnoAlli3";
	console.log("I have run");
	
	/*let projectCards = document.getElementsByClassName("project-grid-container");
	for(let i = 0; i < projectCards.length; i++) {
		projectCards[i].addEventListener("mouseover", function(e) {
			console.log("I have run");
			e.style.transform = `rotate(${70}deg)`;
		});
	}*/
}

window.onload = start;