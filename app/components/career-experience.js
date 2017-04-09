import Ember from 'ember';

export default Ember.Component.extend({
  careerExperience : function(){
    "use strict";
    return this.get('model');
  }
});
