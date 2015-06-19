import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  author: attr('string'),
  text: attr('string'),
  description: attr('string'),
  responses: DS.hasMany('response', {async: true})
});
