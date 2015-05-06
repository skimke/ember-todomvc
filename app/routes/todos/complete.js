import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		this.store.filter('todo', function(todo) {
			return todo.get('isCompleted'); //return the todos with isCompleted value of true
		});
	},
	renderTemplate: function(controller) {
		this.render('todos.index', {controller: controller}); // use the ArrayController todos to render the index
	}
});
