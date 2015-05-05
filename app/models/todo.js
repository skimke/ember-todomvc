import DS from 'ember-data';

export default DS.Model.extend({ //ember-cli uses filenames to create modules
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
}).reopenClass({ //need to look this up
    FIXTURES: [
        {
            id: 1, //required for static data
            title: "Complete Ember.js Tutorial",
            isCompleted: false
        },
        {
            id: 2,
            title: "Checkout some more ember stuff",
            isCompleted: true
        },
        {
            id: 3,
            title: "Make my own stuff with Ember",
            isCompleted: false
        }
    ]
});
