(function(module) {
  module.service('di-service', ['di-value', function DIService(data) {
	  this.get = function() {
		  return data;
	  };
  }]);
}(angular.module('dependency-injection')));
