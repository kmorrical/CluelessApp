(function() {
    'use strict';

    angular
        .module('shopping-clueless')
        .factory('valleyFactory', valleyFactory);

    valleyFactory.$inject = ['$http'];

    function valleyFactory($http) {
        var service = {
            getValley: getValley,
        };
        return service;

        ////////////

        function getValley(input) {
            /*
            $http.get(<url>, <options>)
            $http.post(<url>, <data>, <options>)
            */
        
            return $http.post('https://valspeak.p.mashape.com/valspeak.json?text=' + input, null, {
                headers: {
                    'X-Mashape-Key': 'pbwWWyAc9pmshhK8Pm3Ui3T4Nts0p1ErSGcjsnOskCkIuoiHPV'
            
                }
            });
        }
    }
})();