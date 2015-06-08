angular.module('hollandDemo').directive('viewFooter', function() {
    return {
        restrict:'E',
        replace: true,
        templateUrl:'templates/main/viewFooter.html'
    };
});