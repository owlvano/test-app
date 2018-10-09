var FootballApp = angular.module('FootballApp', [
    'ngRoute',
    'FootballControllers'
]);

FootballApp.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {

        config.headers['X-Auth-Token'] = '039441a2aed54418a0a05234a1648399';

        return config;
        }
    };
});

FootballApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
  });

FootballApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/competitions', {
            templateUrl: 'views/competitions.html',
            controller: 'CompetitionsController'
        }).
        when('/matches/:competitionID', {
            templateUrl: 'views/matches.html',
            controller: 'MatchesController'
        }).
        otherwise({
            redirectTo: '/competitions'
        });
}]);

