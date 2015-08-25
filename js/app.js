angular.module('app', ['ui.router'])
.config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: '/templates/home.html',
      controller: 'HomeController'
    })
    .state('home.profile', {
      url:'',
      templateUrl: '/templates/profile.html',
      controller: 'ProfileController'
    })
})
.controller('HomeController',
  function($scope) {
})
.controller('ProfileController',
  function($scope) {
});
