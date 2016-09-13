/**
 * Created by zschweinfurth on 9/12/2016.
 */
(function () {
    'use strict';
    angular.module('mod1-app', [])
    
    .controller('mod1-controller', Mod1Controller);

    Mod1Controller.$inject = ['$scope'];

    function Mod1Controller ($scope) {
        $scope.lunch_items = "";
        $scope.message = "";
        $scope.parseLunchInput = function () {
            var trimmed_items = $scope.lunch_items.trim();
            if (trimmed_items == "")
            {
                $scope.message = "Please Enter Data First"
            }
            else
            {
                var item_amount = find_items_in_string(trimmed_items);
                if (item_amount <= 3)
                {
                    $scope.message = "Enjoy!"
                }
                else
                {
                    $scope.message = "Too Much!"
                }
            }
        }

    }

    function find_items_in_string (string) {
        var split_string = string.split(',');
        return split_string.length
    }


})();