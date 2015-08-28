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

    //About Me
    $scope.facts = [];
    var fact1 = {
                title: "World Traveler",
                imageName: "images/factOne.jpg",
                description: "I studied abroad at Oxford for an entire year.  While there I loved taking trips all around Europe.  I hope I continue to find times to travel the world!"
              };
  var fact2 = {
              title: "Hockey Player",
              imageName: "images/factTwo.jpg",
              description: "Playing hockey was a given growing up in Minnesota. I continue my love for playing hockey today. One of my fondest memories playing was winning the UK Championship representing Oxford University."
            };
  var fact3 = {
              title: "World Traveler",
              imageName: "images/factOne.jpg",
              imageDescription: "Cinque Terre, Italy",
              description: "I studied abroad at Oxford for an entire year.  While there I loved taking trips all around Europe.  I hope I continue to find times to travel the world!"
            };
    $scope.facts.push(fact1);
    $scope.facts.push(fact2);
    $scope.facts.push(fact3);

    //Program Interests
    $scope.interests = [];
    $scope.interests.push("Web Development & UI Design for Industrial Big Data Analysis Products");
    $scope.interests.push("Big Data Analyis and Machine Learning");
    $scope.interests.push("Understand our industry partners' pain points and the vision of GE-IP");
    $scope.interests.push("Apply Fastworks and Design Thinking processes on my projects to quickly build useful software for our customers");

    //Rotations
    $scope.rotations = [];
    var rotation1 = {title: "Proficy Historian Analysis",
                    location: "Foxboro, MA",
                    description1: "QA functional automated test development using UFT for continous integration of our software",
                    description2: "UI front end development for PHA 6.0/7.0 using AngularJS, HTML5, & CSS"};
    $scope.rotations.push(rotation1);

    //Projects
    $scope.projects = [];
    var project1 = {title: "Proficy Historian Analysis",
                    location: "Foxboro, MA",
                    description1: "QA functional automated test development using UFT for continous integration of our software",
                    description2: "UI front end development for PHA 6.0/7.0 using AngularJS, HTML5, & CSS"};
    $scope.projects.push(project1);


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
