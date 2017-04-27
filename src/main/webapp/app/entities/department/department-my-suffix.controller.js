(function() {
    'use strict';

    angular
        .module('myApp4App')
        .controller('DepartmentMySuffixController', DepartmentMySuffixController);

    DepartmentMySuffixController.$inject = ['Department'];

    function DepartmentMySuffixController(Department) {

        var vm = this;

        vm.departments = [];

        loadAll();

        function loadAll() {
            Department.query(function(result) {
                vm.departments = result;
                vm.searchQuery = null;
            });
        }
    }
})();
