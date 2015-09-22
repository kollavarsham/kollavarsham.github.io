/* global describe, it */

(function () {
  'use strict';

  var assert = require('assert');
  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {

        assert.ok(true);

      });
    });
  });
})();
