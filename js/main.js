const navigationButton = document.querySelector('.navigation__button--js');
navigationButton.addEventListener('click', (e) => {
	const navigationList = document.querySelector('.navigation__list--js');
	navigationList.classList.toggle('navigation__list--visible');
});
