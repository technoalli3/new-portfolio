// JavaScript Document
	
function start() {
	const swapElements = document.getElementsByClassName("name-swap");
	for(let i = 0; i < swapElements.length; i++) {
		swapElements[i].textContent = "TechnoAlli3";
	}
	
	document.getElementById("subscribe").addEventListener('click', swap_text);
		
		
	console.log("I have run");
}

function swap_text() {
	document.getElementById("subscribe").textContent = "This button does nothing!";
}

window.onload = start;