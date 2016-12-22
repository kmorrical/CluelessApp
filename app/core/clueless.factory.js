(function() {
    'use strict';

    angular
        .module('shopping-clueless')
        .factory('cluelessFactory', cluelessFactory);

    cluelessFactory.$inject = ['$http'];

    /* @ngInject */
    function cluelessFactory($http) {
        var service = {
            searchForItem: searchForItem,

            //getById: getById
        };
        return service;

        ////////////////

   

      function searchForItem(input) {
            return $http.get('https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + input, {
               headers: {
                    'X-Mashape-Key': 'pbwWWyAc9pmshhK8Pm3Ui3T4Nts0p1ErSGcjsnOskCkIuoiHPV'
               }
            });
        }


   


           

        

    }
})();