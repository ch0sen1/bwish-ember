import Ember from 'ember';

export default Ember.Component.extend({
  nav: false,

  mouseEnter: function () {
    this.set('nav', true);
  },

  mouseLeave: function () {
    this.set('nav', false);
  },

  actions: {
    invalidateSession: function () {
      this.get('session').invalidate();
    }
  }
});
