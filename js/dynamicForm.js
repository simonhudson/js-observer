const hiddenClass = 'visuallyhidden';


const dynamicForm = () => {

	const setElementVisibility = (options) => {
		const elements = options.elements;
		const value = options.value;
		elements.forEach(element => {
			let showIfValues = element.dataset.showIfValue.split(',').map(item => item.trim());
			const method = (showIfValues.indexOf(value) > -1) ? 'remove' : 'add';
			element.classList[method](hiddenClass);
		});
	};

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
