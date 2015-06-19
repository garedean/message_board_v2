import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', {path: '/'});
  this.route('questions');
  this.resource('question', { path: 'questions/:question_id' }, function() {
    this.resource('responses/new', {path: 'new-response'});
  });
  this.route('questions/new');
});

export default Router;
