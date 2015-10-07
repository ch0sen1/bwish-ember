import Ember from 'ember';

export default Ember.Component.extend({
  sideNav: false,

  actions: {
    invalidateSession: function () {
      this.get('session').invalidate();
    },

    toggleSideNav: function () {
      this.set('sideNav', !this.get('sideNav'));
    }
  }
});
