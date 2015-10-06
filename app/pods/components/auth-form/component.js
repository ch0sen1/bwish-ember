import Ember from 'ember';
import config from '../../../config/environment';
import request from 'npm:request-promise';

export default Ember.Component.extend({
  actions: {
    authenticate: function () {
      this.get('session').authenticate('simple-auth-authenticator:jwt', this.getProperties('identification', 'password'));
    },
    register: function () {
      request.post(`${config.API_URL}/user`).form({
        email: this.get('identification'),

        password: this.get('password')
      }).then(() => {
        this.get('session').authenticate('simple-auth-authenticator:jwt', this.getProperties('identification', 'password'));
      });
    }
  }
});
