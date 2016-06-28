(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('xtMutants', xtMutants);

  function xtMutants() {
    return {
      templateUrl: 'app/mutantList/directives/mutantsTable.html',
      restrict: 'E',
      controller: MutantsTableController,
      controllerAs: 'vm',
      bindToController: true,     // Instead of injecting $scope use this
      scope: {
        mutants: '='    // = means two-way binding
      },
    };
  }

  MutantsTableController.$inject = ['textMessageService'];

  function MutantsTableController(textMessageService) {
    var vm = this;
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;

    function deleteMutant(mutant) {
      console.log(mutant);
      vm.mutants.$remove(mutant);
    }

    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
    }

    function sendText(mutant) {
      textMessageService.sendText(mutant, vm.mutants);
    }

  }
})();
