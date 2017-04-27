(function() {
    'use strict';

    angular
        .module('myApp4App')
        .controller('DepartmentMySuffixDetailController', DepartmentMySuffixDetailController);

    DepartmentMySuffixDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Department', 'Location', 'Employee'];

    function DepartmentMySuffixDetailController($scope, $rootScope, $stateParams, previousState, entity, Department, Location, Employee) {
        var vm = this;

        vm.department = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('myApp4App:departmentUpdate', function(event, result) {
            vm.department = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
