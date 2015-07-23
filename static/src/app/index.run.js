(function() {
  'use strict';

  angular
    .module('boozio')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
