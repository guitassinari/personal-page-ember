import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  description : DS.attr('string'),
  company : DS.attr('string'),
  started_at : DS.attr('date'),
  stopped_at : DS.attr('date')
  // duration : DS.computed(function(started_at - stopped_at){
  //
  // })
});
