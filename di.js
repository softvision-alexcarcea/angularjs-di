(function(angular) {
  var module = angular.module('dependency-injection', []);
  module.constant('di-value', { title: 'Trololo', url: 'https://www.youtube.com/watch?v=sTSA_sWGM44' });
  module.service('di-service', function DIService() {
  });
  module.controller('di-controller', function DIController() {
    this.type = 'Schnitzel';
  });
  module.component('diComponent', {
    template:
      '<div class="di-component">' +
        '{{::vm.name}} sings <a data-ng-href="{{::vm.url}}">"{{::vm.title}}"</a>.' +
      '</div>',
    bindings: {
      name: '@'
    },
    controller: function DIComponent() {
      this.title = 'TBD Placeholder Title';
      this.url = 'https://tbd.placeholder.url/';
    },
    controllerAs: 'vm'
  });
})(angular);