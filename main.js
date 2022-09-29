'use strict';

const homeRollDownButton = document.querySelector('.home__roll-down-button');
const mainContent = document.querySelector('.main');
const header = document.querySelector('.header');
const headerLogos = document.querySelectorAll('.header__logo');
const headerLogoBlue = document.querySelector('.header__logo--blue');
const headerLogoWhite = document.querySelector('.header__logo--white');
const headerButtons = document.querySelectorAll('.header__list-button');

const handleActiveClass = (element) => {
	headerButtons.forEach((button) => {
		button.classList.remove('active');
	});
	element.classList.add('active');
};

const moveToHome = () => {
	mainContent.style.left = '0';
	header.style.top = '-15vh';
};

const moveToAboutMe = () => {
	mainContent.style.left = '-100vw';
	header.style.top = '0';
	handleActiveClass(headerButtons[0]);
	headerLogoWhite.style.display = 'none';
	headerLogoBlue.style.display = 'block';
	headerButtons.forEach((button) => {
		button.style.color = '#2a3840';
		button.style.borderBottomColor = '#2a3840';
	});
};

const moveToMyServices = () => {
	mainContent.style.left = '-200vw';
	header.style.backgroundColor = 'transparent';
	headerLogoBlue.style.display = 'none';
	headerLogoWhite.style.display = 'block';
	headerButtons.forEach((button) => {
		button.style.color = 'white';
		button.style.borderBottomColor = 'white';
	});
};

const moveToContact = () => {
	mainContent.style.left = '-300vw';
	headerLogoWhite.style.display = 'none';
	headerLogoBlue.style.display = 'block';
	headerButtons.forEach((button) => {
		button.style.color = '#2a3840';
		button.style.borderBottomColor = '#2a3840';
	});
};

const moveToFaq = () => {
	mainContent.style.left = '-400vw';
	header.style.backgroundColor = 'transparent';
	headerLogoBlue.style.display = 'none';
	headerLogoWhite.style.display = 'block';
	headerButtons.forEach((button) => {
		button.style.color = 'white';
		button.style.borderBottomColor = 'white';
	});
};

const moveContent = (whereTo) => {
	switch (whereTo) {
		case 'home':
			moveToHome();
			break;
		case 'about-me':
			moveToAboutMe();
			break;
		case 'my-services':
			moveToMyServices();
			break;
		case 'contact':
			moveToContact();
			break;
		case 'faq':
			moveToFaq();
			break;
	}
};

homeRollDownButton.onclick = () => {
	moveContent('about-me');
};

headerButtons.forEach((button) => {
	button.onclick = () => {
		moveContent(button.id);
		handleActiveClass(button);
	};
});

headerLogos.forEach((logo) => {
	logo.onclick = () => {
		moveContent('home');
	};
});
