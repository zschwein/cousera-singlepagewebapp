/**
 * Created by zschweinfurth on 9/8/2016.
 */
(function () {
    'use strict';
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
            $scope.name = "My New Name"
    })
})();
