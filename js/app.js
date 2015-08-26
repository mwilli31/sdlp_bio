angular.module('app', ['ui.router'])
.controller('MainController',
  function($scope) {
    //Name, GE Business, Education, Location
    $scope.name = "Michael Williams";
    $scope.geBusiness1 = "GE Intelligent";  //only split on two lines if more than two words
    $scope.geBusiness2 = "Platforms"        //leave this blank if "GE Software"
    $scope.education1 = "University of";     //Same rules apply as above
    $scope.education2 = "Notre Dame";
    $scope.locationCityState = "Foxboro, MA"
    $scope.locationCountry = "USA"

    //Program Interests
    $scope.interests = [];
    $scope.interests.push("Web Development & UI Design for Industrial Big Data Analysis Products");
    $scope.interests.push("Big Data Analyis and Machine Learning");
    $scope.interests.push("Understand our industry partners' pain points and the vision of GE-IP");
    $scope.interests.push("Apply Fastworks and Design Thinking processes on my projects to quickly build useful software for our customers");


    //Skills
    $scope.skills =         [{name:'JS',perc:'75%',goal:'95%'},
                            {name:'HTML5',perc:'85%',goal:'98%'},
                            {name:'UFT (QTP)',perc:'30%',goal:'80%'},
                            {name:'Chef',perc:'10%',goal:'55%'},
                            {name:'RSpec',perc:'10%',goal:'65%'}];

    $scope.skillsDormant =  [{name:'C++',perc:'65%'},
                            {name:'C',perc:'85%'},
                            {name:'Objective-C',perc:'75%'}];
})
