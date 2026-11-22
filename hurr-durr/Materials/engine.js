let hurr = [
	"HURR",
	"HURRrrRRrrr-DuUUUUUUUuUuUURRRRR",
	"DURR???!1!",
	"DURR!",
	"DURR!",
	"DURR!",
	"HURR-DURR",
	"DURR???!1!",
	"HURR-DURR",
	"HURR-DURR",
	"GET HURR + GET DURR",
	"DURR!",
	"DURR???!1!",
	"DURR",
	"DURR!",
	"DURR???!1!",
	"HURRrrRRrrr-DuUUUUUUUuUuUURRRRR",
	"DURR",
	"DURR???!1!",
	"HURRrrRRrrr-DuUUUUUUUuUuUURRRRR",
	"DURR???!1!",
	"HURR-DURR",
	"DURR???!1!",
	"GET HURR + GET DURR",
	"DURR",
	"HURR!!!111Ione"
];

function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function setWindow() {			
	window.moveTo(randomRange(0, screen.width), randomRange(0, screen.height));
}

function setTitle() {	
	document.title = hurr[randomRange(0, hurr.length - 1)];
}

window.oncontextmenu = () => false;
window.onbeforeunload = () => "HURRRRRRRRRRRRRRRRRRRRR!";
window.onload = () => {
	setInterval(setTitle, 1500);
	setInterval(setWindow, 750);
	
	return true;
}
window.onkeydown = () => {
	if (['Shift', 'Control', 'Alt', 'Escape', 'F4', 'Enter'].includes(event.key))
		for (let x in hurr) confirm(hurr[x]);
	
	return null;
}

if (self.parent.frames.length) self.parent.location = document.location;
