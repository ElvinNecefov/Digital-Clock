let buttondiv = document.querySelector(".buttons");
buttons  = buttondiv.querySelectorAll("button");

const addEvent = (selector, event, func) => {
	const elements = document.querySelectorAll(selector);
	for (let i = 0; i < elements.length; i++) {
		elements[i].addEventListener(event, func);
	}

	return elements;
}

const timeCorrector = (time, selector) => {
	if(time < 10) {
		document.querySelector(selector).innerText = "0" + time;
	} else {
		document.querySelector(selector).innerText = time;
	}

	return time;
}




const start = document.querySelector("#start");

let timer;
let s = 0;
let m = 0;
let h = 0;


/* Start duymesini vuranda ishleyecek */
addEvent("#start", 'click', e => { 
	start.setAttribute("disabled", "disabled");

	timer = setInterval(() => {
		// Seconds
		s = timeCorrector(++s, '#seconds');

		if(s === 60) {
			s = 0; // saniye 60 olanda sifirlansin
			timeCorrector(s, '#seconds');
			
			// Minutes
			m = timeCorrector(++m, '#minutes');

			if(m === 60) {
				m = 0; // deqiqe 60 olanda sifirlansin
				timeCorrector(m, '#minutes');
				
				// Hours
				h = timeCorrector(++h, '#hours');
			}
		}
	}, 1000);
})

/* Stop duymesini vuranda ishleyecek */
addEvent("#stop", 'click', e => { 
	start.removeAttribute("disabled");
	clearInterval(timer);
})


/* Reset duymesini vuranda ishleyecek */
addEvent("#reset", 'click', e => { 
	start.removeAttribute("disabled");
	clearInterval(timer);

	s = 0;
	m = 0;
	h = 0;

	document.querySelector('#seconds').innerText = "00";
	document.querySelector('#minutes').innerText = "00";
	document.querySelector('#hours').innerText = "00";
})