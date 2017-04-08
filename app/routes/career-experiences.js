import Ember from 'ember';
import CareerExperience from '../models/career-experience';

export default Ember.Route.extend({
  model() {
    var careerExperience = this.store.createRecord('career-experience',{
      name : 'Hey, ho, lets go!',
      company : 'Me Salva!',
      description : 'Meu teste!',
      started_at : new Date(),
      stopped_at : new Date()
    });
    console.log(careerExperience)
    return [careerExperience];
  }
});
