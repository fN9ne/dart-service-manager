function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});

var video = document.querySelector('.video');
var btn = document.querySelector('.header__video');
var dark = document.querySelector('.header__dark');

dark.onclick = function() {
	video.setAttribute('controls', '');
	dark.remove();
	video.play();
};

let button = document.querySelector('.burger__button');
button.addEventListener("click", function(e) {
	let menu = document.querySelector('.header__burger-menu');
	menu.classList.toggle('_active');
});

let buttoN = document.querySelector('.footer__burger-button');
buttoN.addEventListener("click", function(e) {
	let activated_menu = document.querySelector('.footer__burger-menu')
	activated_menu.classList.toggle('_active');
})

var d1 = document.querySelector('.team__person_1');
var d2 = document.querySelector('.team__person_2');
var d3 = document.querySelector('.team__person_3');

inpiit1.onclick = function() {
	if(inpiit1.checked) {
		d1.classList.add("activated");
		d2.classList.remove("activated");
		d3.classList.remove("activated");
	} else {
	}
}
inpiit2.onclick = function() {
	if(inpiit2.checked) {
		d1.classList.remove("activated");
		d2.classList.add("activated");
		d3.classList.remove("activated");
	} else {
	}
}
inpiit3.onclick = function() {
	if(inpiit3.checked) {
		d1.classList.remove("activated");
		d2.classList.remove("activated");
		d3.classList.add("activated");
	} else {
	}
}