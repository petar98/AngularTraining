app.controller('ListController', function ($scope) {
    var tmpList = [];

    for (var i = 1; i <= 6; i++){
        tmpList.push({
            text: 'Item ' + i,
            value: i
        });
    }

    $scope.list = tmpList;


    $scope.sortingLog = [];

    $scope.sortableOptions = {
        update: function(e, ui) {
            var logEntry = tmpList.map(function(i){
                return i.value;
            }).join(', ');
        },
        stop: function(e, ui) {
            // this callback has the changed model
            var logEntry = tmpList.map(function(i){
                return i.value;
            }).join(', ');
        }
    };
});