import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  description : DS.attr('string'),
  company : DS.attr('string'),
  started_at : DS.attr('date'),
  stopped_at : DS.attr('date'),
  image : DS.attr('string'),
  technologies : DS.attr()
});
