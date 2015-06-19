import Ember from "ember";

var NewQuestionController = {
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        text: this.get('text'),
        author: this.get('author'),
        description: this.get('description')
      });

      newQuestion.save();

      this.set('author', '');
      this.set('text', '');
      this.set('description', '');

      this.transitionToRoute('questions');
    }
  }
};

export default Ember.Controller.extend(NewQuestionController);
