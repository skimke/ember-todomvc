import Ember from 'ember';

// all of the following a javascript objects with key value pairs.

export default Ember.ArrayController.extend({ //need to specify controller type
	actions: {
		createTodo: function(newTitle) { //handlebar automatically passes in values as this variable
			// create a new todo
			var todo = this.store.createRecord('todo', {
				title: newTitle,
				isCompleted: false
			});

			// clear the input text field
			this.set('newTitle', '');

			// save the new todo
			todo.save();
		},
		clearCompleted: function() {
			var completed = this.filterBy('isCompleted', true);
			completed.invoke('deleteRecord'); //compare this to how you'd store.createRecord
			completed.invoke('save');
		}
	},

	remaining: function() {
		return this.filterBy('isCompleted', false).get('length'); //count for all todos with isCompleted value of false
	}.property('@each.isCompleted'), //a computed property that will watch each todo for changes to the isCompleted value

	completed: function() {
		return this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	allAreDone: function(key, value) {
		console.log(key + ": " + value);

		if (value === undefined) { //if the checkbox value is undefined
			return this.get('length') > 0 && this.isEvery('isCompleted', true);
			//are there any todos, and if every one of them's isCompleted value of true
		} else {
			this.setEach('isCompleted', value); //if checkbox value is defined aka it was clicked, set each todo's value as either true or false (checked aka true by default)
			this.invoke('save'); //then save
			return value;
		}
	}.property('@each.isCompleted'),

	inflection: function() {
		var remaining = this.get('remaining');
		return (remaining === 1) ? 'item' : 'items';
	}.property('remaining'), //computed property that watches the remaining property

	hasCompleted: function() {
		return this.get('completed') > 0; //the var completed in completed
	}.property('completed') //watching the completed property


});
