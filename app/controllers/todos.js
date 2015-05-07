import Ember from 'ember';

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
		}
	},
	remaining: function() {
		return this.filterBy('isCompleted', false).get('length'); //count for all todos with isCompleted value of false
	}.property('@each.isCompleted'), //a computed property that will watch each todo for changes to the isCompleted value
	inflection: function() {
		var remaining = this.get('remaining');
		return (remaining === 1) ? 'item' : 'items';
	}.property('remaining') //computed property that watches the remaining property

});
