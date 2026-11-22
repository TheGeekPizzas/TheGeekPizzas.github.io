let container = document.querySelector('#roll');
let popupIcon = document.querySelector('#hurr-picon');
let funnyLink = document.querySelector('#fun');

let aWindow = null;

async function beginFun() {
	for (let i = 0; openPopup() && i < 69; i++)
		await new Promise(r => setTimeout(r, 150));
}

function openPopup() {
	while (
		(aWindow = window.open('HURRRRRRRRRRRRRRRRR.html', '_blank', 'menubar=no, status=no, toolbar=no, resizable=no, width=640, height=580, titlebar=no, alwaysRaised=yes')) === null
		) {
		if (!confirm("HURRrrRRrrr-DuUUUUUUUuUuUURRRRR!!!\nYou must enable pop-ups for the site to work correctly."))
			return false;
	}
	
	return true;
}

function isPopupOpen() {	
    if (!aWindow || aWindow && aWindow.closed) {
		container.classList.add('clicky');
		container.addEventListener('click', payloadSwitch);

		popupIcon.src = "Archives/popup-blocked.png";

		return false;
	}

	return true;
}

function payloadSwitch() {
	if (!isPopupOpen()) {
		openPopup();
		container.classList.remove('clicky');
		container.removeEventListener('click', payloadSwitch);

		popupIcon.src = "Archives/popup-allowed.png";
	}
	else {
		aWindow.close();
		container.classList.add('clicky');
		container.addEventListener('click', payloadSwitch);

		popupIcon.src = "Archives/popup-blocked.png";
	}
}

window.oncontextmenu = () => false;

container.addEventListener('click', payloadSwitch);
popupIcon.addEventListener('click', payloadSwitch);
funnyLink.addEventListener('click', beginFun)

setInterval(isPopupOpen, 200);
