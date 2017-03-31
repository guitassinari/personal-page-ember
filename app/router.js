import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< 689372ace6a5bbd097d333c8a49069e7d6eb5f07
  "use strict";
=======
>>>>>>> adds home page
  this.route('home');
});

export default Router;
