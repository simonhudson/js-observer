const hiddenClass = 'visuallyhidden';

const setElementVisibility = (options) => {

	const elements = options.elements;
	const value = options.value;

	elements.forEach(element => {
		const showIf = element.dataset.showIfValue;
		const method = (value === showIf) ? 'remove' : 'add';
		element.classList[method](hiddenClass);
	});

};

const dynamicForm = () => {

	const forms = Array.from(document.querySelectorAll('.js-dynamic-form'));
	if (!forms || !forms.length) return;

	forms.forEach(form => {
		const showIfElements = Array.from(document.querySelectorAll('[data-show-if-field]'));
		setElementVisibility({elements: showIfElements})

		const elements = Array.from(document.querySelectorAll('input, textarea, select'));
		elements.forEach(element => {
			const elementObserver = new Observable();
			elementObserver.subscribe(setElementVisibility);
			const name = element.getAttribute('name');
			const dependentElements = Array.from(document.querySelectorAll(`[data-show-if-field="${name}"]`));
			const events = ['keyup', 'change'];
			events.forEach(evt => {
				element.addEventListener(evt, e => {
					const value = element.value;
					elementObserver.notify({value, elements: dependentElements});
				});
			});
		});

	});

};
dynamicForm();
