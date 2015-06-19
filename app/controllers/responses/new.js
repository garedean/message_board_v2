import Ember from "ember";

var NewResponseController = {
  needs: ['question'],

  actions: {
    addResponse: function() {
      var question = this.get('controllers.question.model');

      var newResponse = this.store.createRecord('response', {
        author: this.get('author'),
        text: this.get('text'),
        date: new Date()
      });

      newResponse.save().then(function() {
        question.get('responses').pushObject(newResponse);

        question.save();
      });

      this.set('author', '');
      this.set('text', '');


      this.transitionToRoute('question', question);
    }
  }
};

export default Ember.Controller.extend(NewResponseController);
