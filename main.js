'use strict';

const homeRolldownButton = document.querySelector('.home__rolldown-button');
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

const moveContent = (whereTo) => {
	switch (whereTo) {
		case 'home':
			mainContent.style.left = '0';
			header.style.top = '-15vh';
			break;
		case 'about-me':
			mainContent.style.left = '-100vw';
			header.style.top = '0';
			handleActiveClass(headerButtons[0]);
			headerLogoWhite.style.display = 'none';
			headerLogoBlue.style.display = 'block';
			headerButtons.forEach((button) => {
				button.style.color = '#2a3840';
				button.style.borderBottomColor = '#2a3840';
			});
			break;
		case 'my-services':
			mainContent.style.left = '-200vw';
			header.style.backgroundColor = 'transparent';
			headerLogoBlue.style.display = 'none';
			headerLogoWhite.style.display = 'block';
			headerButtons.forEach((button) => {
				button.style.color = 'white';
				button.style.borderBottomColor = 'white';
			});
			break;
		case 'contact':
			mainContent.style.left = '-300vw';
			headerLogoWhite.style.display = 'none';
			headerLogoBlue.style.display = 'block';
			headerButtons.forEach((button) => {
				button.style.color = '#2a3840';
				button.style.borderBottomColor = '#2a3840';
			});
			break;
		case 'faq':
			mainContent.style.left = '-400vw';
			header.style.backgroundColor = 'transparent';
			headerLogoBlue.style.display = 'none';
			headerLogoWhite.style.display = 'block';
			headerButtons.forEach((button) => {
				button.style.color = 'white';
				button.style.borderBottomColor = 'white';
			});
			break;
	}
};

homeRolldownButton.onclick = () => {
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
