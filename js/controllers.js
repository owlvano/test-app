var FootballControllers = angular.module('FootballControllers', []);

FootballControllers.controller('CompetitionsController', ['$scope', '$http',  
    function($scope, $http){
        $http({
            url: 'http://api.football-data.org/v2/competitions/',
            method: 'GET',
        }).then(function successCallback(response) {
            $scope.competitionsData = response.data;
            });    
    }]
);

FootballControllers.controller('MatchesController', ['$scope', '$http', '$routeParams',  
    function($scope, $http, $routeParams){
        $http({
            url: 'http://api.football-data.org/v2/competitions/' + $routeParams.competitionID + '/matches',
            method: 'GET',
        }).then(function successCallback(response) {
            $scope.matchesData = response.data;
            });    
    }]
);