'use strict';

const home = document.querySelector('.home');
const myServices = document.querySelector('.my-services');
const homeRollDownButton = document.querySelector('.home__roll-down-button');
const mainContent = document.querySelector('.main');
const header = document.querySelector('.header');
const headerLogos = document.querySelectorAll('.header__logo');
const headerButtons = document.querySelectorAll('[data-headerbutton]');
const contactButton = document.querySelector('[data-contactbutton]');
const faqQuestions = document.querySelectorAll('.faq__question');
const homeVideoButton = document.querySelector('.home__video-button');
const homeVideoContainer = document.querySelector('.home__video-container');
const homeVideo = document.querySelector('.home__video');
const myServicesVideoButton = document.querySelector(
	'.my-services__video-button'
);
const myServicesVideoContainer = document.querySelector(
	'.my-services__video-container'
);
const myServicesVideo = document.querySelector('.my-services__video');

const handleActiveClass = (element) => {
	headerButtons.forEach((button) => {
		button.classList.remove('active');
	});
	element.classList.add('active');
};

//FIXME: WEIRD CHANGE OF CLASSNAME
const moveMainContent = (section) => {
	mainContent.className = `${
		mainContent.className.split(' ')[0]
	} main--${section}`;
};

const moveHeader = () => {
	header.classList.toggle('header--down');
};

const changeHeaderColor = (color) => {
	//FIXME: ACCESSING CLASS BY INDEX IS BAD
	if (
		(color === 'light' && headerLogos[0].classList[1]) ||
		(color === 'dark' && headerLogos[1].classList[1])
	)
		return;

	headerLogos.forEach((logo) => {
		logo.classList.toggle('header__logo--inactive');
	});
	headerButtons.forEach((button) => {
		button.classList.toggle('header__list-button--light');
	});
};

const moveToHome = () => {
	moveMainContent('home');
};

// FIXME: weird way to access button index 0
const moveToAboutMe = () => {
	moveMainContent('about-me');
	changeHeaderColor('dark');
	handleActiveClass(headerButtons[0]);
};

const moveToMyServices = () => {
	moveMainContent('my-services');
	changeHeaderColor('light');
};

const moveToContact = () => {
	moveMainContent('contact');
	changeHeaderColor('dark');
};

const moveToFaq = () => {
	moveMainContent('faq');
	changeHeaderColor('light');
};

const moveContent = {
	toHome: () => moveToHome(),
	toAboutMe: () => moveToAboutMe(),
	toMyServices: () => moveToMyServices(),
	toContact: () => moveToContact(),
	toFaq: () => moveToFaq(),
};

const moveFromHomeToAboutMe = () => {
	moveHeader();
	moveContent['toAboutMe']();
};

homeRollDownButton.addEventListener('click', () => {
	moveFromHomeToAboutMe();
});

headerButtons.forEach((button) => {
	button.addEventListener('click', () => {
		moveContent[button.dataset.headerbutton]();
		handleActiveClass(button);
	});
});

// FIXME: weird way to access button index 2
contactButton.addEventListener('click', () => {
	moveContent['toContact']();
	handleActiveClass(headerButtons[2]);
});

headerLogos.forEach((logo) => {
	logo.addEventListener('click', () => {
		moveHeader();
		moveContent['toHome']();
	});
});

faqQuestions.forEach((question) => {
	question.addEventListener('click', () => {
		faqQuestions.forEach((clickedQuestion) => {
			if (question !== clickedQuestion) clickedQuestion.removeAttribute('open');
		});
	});
});

home.addEventListener('mousewheel', (event) => {
	if (event.wheelDelta <= 0) moveFromHomeToAboutMe();
});

home.addEventListener('click', (event) => {
	if (event.target.id !== 'video-button-home') {
		homeVideoContainer.classList.remove('home__video-container--active');
		const homeVideoSrc = homeVideo.src;
		homeVideo.src = homeVideoSrc;
	}
});

homeVideoButton.addEventListener('click', () => {
	homeVideoContainer.classList.add('home__video-container--active');
});

myServicesVideoButton.addEventListener('click', () => {
	myServicesVideoContainer.classList.add(
		'my-services__video-container--active'
	);
});

myServices.addEventListener('click', (event) => {
	if (event.target.id !== 'video-button-my-services') {
		myServicesVideoContainer.classList.remove(
			'my-services__video-container--active'
		);
		const myServicesVideoSrc = myServicesVideo.src;
		myServicesVideo.src = myServicesVideoSrc;
	}
});
