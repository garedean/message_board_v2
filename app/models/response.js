import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  text: attr('string'),
  author: attr('string'),
  date: attr('date'),
  question: DS.belongsTo('question', {async: true})
});
