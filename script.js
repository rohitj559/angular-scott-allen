// Code goes here

// var app = angular.module('myApp', []);

// app.controller('myCtrl', function($scope) {
//     $scope.message = "Hello Rohit";
//   });

(function(){
  angular.module('myApp', []).controller('myCtrl', function($scope) {
    var person = {
      firstName: "Steve",
      lastName: "Jobs",
      imageSrc: "https://specials-images.forbesimg.com/imageserve/5b8576db31358e0429c734e3/416x416.jpg?background=000000&cropX1=211&cropX2=2381&cropY1=900&cropY2=3072"
    };

    $scope.message = "Hello Angular!!";
    $scope.person = person;
  })}());
