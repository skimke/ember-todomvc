import Ember from 'ember';

export default Ember.ObjectController.extend({ //must specify ObjectController rather than default Controller
	actions: {
		editTodo: function() {
			this.set('isEditing', true);
		}
	}//,

	// isEditing: false
	// the isEditing property can be manually added but ember takes care of this
});
