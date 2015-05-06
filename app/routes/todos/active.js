import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return !todo.get('isCompleted'); //return the todos that don't have isCompleted value of true
		});
	},
	renderTemplate: function(controller) {
		this.render('todos.index', {controller: controller}); //use the todos ArrayController and its index
	}

});
