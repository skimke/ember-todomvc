import Ember from 'ember';

export default Ember.ObjectController.extend({ //must specify ObjectController rather than default Controller
	actions: {
		editTodo: function() {
			this.set('isEditing', true);
		}
	}
});
