'use strict';

const home = document.querySelector('.home');
const homeRollDownButton = document.querySelector('.home__roll-down-button');
const mainContent = document.querySelector('.main');
const header = document.querySelector('.header');
const headerLogos = document.querySelectorAll('.header__logo');
const headerButtons = document.querySelectorAll('.header__list-button');
const faqQuestions = document.querySelectorAll('.faq__question');

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
	) {
		return;
	}

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
	home: () => moveToHome(),
	'about-me': () => moveToAboutMe(),
	'my-services': () => moveToMyServices(),
	contact: () => moveToContact(),
	faq: () => moveToFaq(),
};

const moveFromHomeToAboutMe = () => {
	moveHeader();
	moveContent['about-me']();
};

homeRollDownButton.onclick = () => {
	moveFromHomeToAboutMe();
};

home.addEventListener('mousewheel', (event) => {
	if (event.wheelDelta <= 0) {
		moveFromHomeToAboutMe();
	}
});

headerButtons.forEach((button) => {
	button.onclick = () => {
		moveContent[button.id]();
		handleActiveClass(button);
	};
});

headerLogos.forEach((logo) => {
	logo.onclick = () => {
		moveHeader();
		moveContent['home']();
	};
});

faqQuestions.forEach((question) => {
	question.onclick = () => {
		faqQuestions.forEach((clickedQuestion) => {
			if (question !== clickedQuestion) {
				clickedQuestion.removeAttribute('open');
			}
		});
	};
});
