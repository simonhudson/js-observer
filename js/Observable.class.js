class Observable {

	// each instance of the Observer class starts with an empty array of things (observers) that react to a state change
	constructor() {
		this.observers = [];
	}

	// add the ability to subscribe to a new object / DOM element essentially, add something to the observers array
	subscribe(element) {
		this.observers.push(element);
	}

	// add the ability to unsubscribe from a particular object essentially, remove something from the observers array
	unsubscribe(element) {
		this.observers = this.observers.filter(subscriber => subscriber !== element);
	}

	// update all subscribed objects / DOM elements and pass some data to each of them
	notify(data) {
		this.observers.forEach(observer => observer(data));
	}

}
