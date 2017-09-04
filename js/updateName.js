const updateName = () => {
	const input = document.querySelector('.js-input-name');
	const text1 = document.querySelector('.js-text-1');

	const updateText = (text) => text1.textContent = text;

	const textObserver = new Observable();
	textObserver.subscribe(updateText);

	input.addEventListener('keyup', e => textObserver.notify(e.target.value));
};
updateName();
