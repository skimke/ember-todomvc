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
	}
});
