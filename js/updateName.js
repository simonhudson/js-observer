const updateName = () => {
	const input = document.querySelector('.js-input-name');
	const text1 = document.querySelector('.js-text-1');

	const updateText = (options) => text1.textContent = options.text;

	const textObserver = new Observable();
	textObserver.subscribe(updateText);

	input.addEventListener('keyup', e => textObserver.notify({text: e.target.value}));
};
updateName();
