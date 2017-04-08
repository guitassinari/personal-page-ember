import Ember from 'ember';

export default Ember.Component.extend({
  careerExperience : function(){
    console.log(this.get('model'))
    return this.get('model');
  }
});
