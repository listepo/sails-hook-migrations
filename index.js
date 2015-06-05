var migrate = require('db-migrate');

module.exports = function(sails) {

  return {

    /**
     * Default configuration
     *
     * We do this in a function since the configuration key for
     * the hook is itself configurable, so we can't just return
     * an object.
     */
    defaults: {

      __configKey__: {
        // Set autoreload to be active by default
        active: true
      }
    },

    /**
     * Initialize the hook
     * @param  {Function} cb Callback for when we're done initializing
     */
    initialize: function(cb) {

      if (!sails.config[this.configKey].active) {
        sails.log.verbose("Autoreload hook deactivated.");
        return cb();
      }
      sails.on('hook:orm:loaded', function() {

      });

      // We're done initializing.
      return cb();

    },

  };

};
