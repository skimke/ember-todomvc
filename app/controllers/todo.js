import Ember from 'ember';

export default Ember.ObjectController.extend({ //must specify ObjectController rather than default Controller
	actions: {
		editTodo: function() {
			this.set('isEditing', true);
		},
		acceptChanges: function() {
			this.set('isEditing', false); //done editing with this action, set state to false

			if(Ember.isEmpty(this.get('model.title')) ) {//if the todo with the title is empty
				this.send('removeTodo'); //if so, call the removeTodo action
			} else {
				this.get('model').save(); //if not, save in the model
			}

		},
		removeTodo: function() {
			var todo = this.get('model'); // get the model
			todo.deleteRecord(); //delete the record
			todo.save(); //save the deletion
		}
	}//,

	// isEditing: false
	// the isEditing property can be manually added but ember takes care of this
});
