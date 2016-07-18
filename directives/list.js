'use strict';

app.directive('list', [function () {
    return {
        restrict: 'A',
        templateUrl: 'views/list.html',
        controller: 'ListController'
    }
}]);