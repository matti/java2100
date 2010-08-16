
var Exercises = {
	total: null,
	required: null,
	additional: null,
	bonus: null,
	
	countExercises: function(container) {
		this.total = $('h3').size();
		this.required = $('h3.req').size() + $('h3.show').size();
		this.bonus = $('h3.bonus').size();
		this.additional = this.total - this.required - this.bonus;
	},
	
	writeCounts: function() {
		var required_span = $('span#required_exercises_count');
		var additional_span = $('span#additional_exercises_count');
		var bonus_span = $('span#bonus_exercises_count');
				
		required_span.text(this.required);
		additional_span.text(this.additional);
		bonus_span.text(this.bonus);

	}
}
