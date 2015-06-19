import Ember from "ember";

var QuestionController = {
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
};

export default Ember.Controller.extend(QuestionController);
