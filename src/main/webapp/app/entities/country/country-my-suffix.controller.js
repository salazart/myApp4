(function() {
    'use strict';

    angular
        .module('myApp4App')
        .controller('CountryMySuffixController', CountryMySuffixController);

    CountryMySuffixController.$inject = ['Country'];

    function CountryMySuffixController(Country) {

        var vm = this;

        vm.countries = [];

        loadAll();

        function loadAll() {
            Country.query(function(result) {
                vm.countries = result;
                vm.searchQuery = null;
            });
        }
    }
})();
