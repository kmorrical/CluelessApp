(function() {
        'use strict';

        angular
            .module('shopping-clueless')
            .controller('SearchController', SearchController);

        SearchController.$inject = ['cluelessFactory', 'valleyFactory', '$q'];

        /* @ngInject */
        function SearchController(cluelessFactory, valleyFactory) {
            var vm = this;

            // vm.findItem = findItem;
            //  vm.getValtalk=getValtalk;
            vm.translateItem = translateItem;
            //vm.getValtalk = vm.getValtalk;




            /////////////



            // function findItem(input) {
            //    cluelessFactory
            //      .searchForItem(input) //this is a "get"

            //      .then(function(response) {

            //          vm.results = response.data; //was vm.results=response.data.Search;
            //          console.log('I think its working');

            //      })

            //      .catch(function(error) {
            //        alert('Ruh roh!', 'Error');
            //      });
            //  } 

            //    function getValtalk(input) {
            //    valleyFactory
            //      .getValley(input)
            //      .then(function (response){
            //        vm.results = response.data;
            //        console.log('It might be working? the second function silly');
            //      })
            //      .catch(function(error) {
            //        alert('An error occurred. Please try again later');
            //      });
            //    } 

            function translateItem(input) {

                cluelessFactory
                    .searchForItem(input) //this is a "get" I DID USE input in here but i do not think it should be input
                    .then(function(response) {
                        valleyFactory
                            .getValley(response.data.list[0].definition) //when i had input in here it returned "yolo" it was using the original input.. i do not want 
                            //to translate the input i want to translate the output of the first function
                            .then(function(response) {
                                vm.results = response.data.contents.translated;
                                console.log('It might be working? All of it valley girl');
                                console.log(response.data);
                            })
                            .catch(function(error) {
                                alert('An error occurred in the third function');
                            });
                    })
                    // .then(function(response) {

                //     vm.results = response.data; //was vm.results=response.data.Search;
                //     console.log('I think its working');

                // })

            }
        }
    }








)();
