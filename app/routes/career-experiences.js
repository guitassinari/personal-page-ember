import Ember from 'ember';
import CareerExperience from '../models/career-experience';

export default Ember.Route.extend({
  model() {
    var careerExperience = this.store.createRecord('career-experience',{
      name : 'Hey, ho, lets go!',
      company : 'Me Salva!',
      description : 'Meu teste!',
      started_at : new Date(),
      stopped_at : new Date(),
      technologies : ['AngularJS', 'EmberJS', 'React']
    });
    var careerExperience2 = this.store.createRecord('career-experience',{
      name : 'Hey, ho, lets go!',
      company : 'Ciee-RS',
      description : 'Meu teste!',
      started_at : new Date(),
      stopped_at : new Date(),
      technologies : ['AngularJS', 'Java', 'React']
    });

    return [careerExperience, careerExperience2];
  }
});
