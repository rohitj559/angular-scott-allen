// Code goes here

// // activity 1
// syntax 1
// var app = angular.module('myApp', []);

// app.controller('myCtrl', function($scope) {
//     $scope.message = "Hello Angular!!";
//   });

// syntax 2
(function(){
  angular.module('myApp', []).controller('myCtrl', function($scope) {
    var person = {
      firstName: "Steve",
      lastName: "Jobs",
      imageSrc: "https://specials-images.forbesimg.com/imageserve/5b8576db31358e0429c734e3/416x416.jpg?background=000000&cropX1=211&cropX2=2381&cropY1=900&cropY2=3072"
    };

    $scope.person = person;
  })}());

// // activity 2
// shorter syntax
// (function(){
//   angular.module('myApp', []).controller('myCtrl', function($scope, $http) {
//     $http.get("https://api.github.com/users/rohitj559")
//         .then(function(response){
//           $scope.user = response.data;
//         })
//         .catch(function(reason){
//           $scope.error = "Could not fetch the user";
//         });

//   $scope.message = "Github Viewer!!";
//   })}());

// longer syntax for using $http service(using abstraction)
// (function(){
//   angular.module('myApp', []).controller('myCtrl', function($scope, $http) {

//     var onUserComplete = function(response){
//       $scope.user = response.data
//     };

//     var onError = function(reason){
//       $scope.error = "Could not fetch the user"
//     };

//     $http.get("https://api.github.com/users/rohitj559")
//         .then(onUserComplete, onError);

//     $scope.message = "Github Viewer!!";
//   })}());

// //activity 3
// (function(){
//   angular.module('myApp', []).controller('myCtrl', function($scope, $http) {

//     var onUserComplete = function(response){
//       $scope.user = response.data
//       $http.get($scope.user.repos_url)
//       .then(onRepos, onError)
//     };

//     var onRepos = function(response){
//       $scope.repos = response.data
//     };

//     var onError = function(reason){
//       $scope.error = "Could not fetch the data"
//     };

//     $scope.search = function(){
//       $http.get("https://api.github.com/users/" + $scope.username)
//           .then(onUserComplete, onError);
//     };

//     $scope.message = "Github Viewer!!";
//   })}());

// // activity 4
// (function(){
//   angular.module('myApp', []).controller('myCtrl', function($scope, $http) {

//     var onUserComplete = function(response){
//       $scope.user = response.data
//       $http.get($scope.user.repos_url)
//       .then(onRepos, onError)
//     };

//     var onRepos = function(response){
//       $scope.repos = response.data
//     };

//     var onError = function(reason){
//       $scope.error = "Could not fetch the data"
//     };

//     $scope.search = function(username){
//       $http.get("https://api.github.com/users/" + $scope.username)
//           .then(onUserComplete, onError);
//     };

//     $scope.message = "Github Viewer!";
//     //$scope.repoSortOrder = "-stargazers_count"
//   })}());

// activity 5
// (function(){
//   angular.module('myApp', []).controller('myCtrl', function($scope, $http) {

//     var onUserComplete = function(response){
//       $scope.user = response.data
//       $http.get($scope.user.repos_url)
//       .then(onRepos, onError)
//     };

//     var onRepos = function(response){
//       $scope.repos = response.data
//     };

//     var onError = function(reason){
//       $scope.error = "Could not fetch the data"
//     };

//     $scope.search = function(username){
//       $http.get("https://api.github.com/users/" + $scope.username)
//           .then(onUserComplete, onError);
//     };

//     $scope.message = "Github Viewer!!";
//     $scope.repoSortOrder = "-stargazers_count"
//   })}());

// activity 6
(function(){
  angular.module('myApp', []).controller('myCtrl', function($scope, $http) {

    var onUserComplete = function(response){
      $scope.user = response.data
      $http.get($scope.user.repos_url)
      .then(onRepos, onError)
    };

    var onRepos = function(response){
      $scope.repos = response.data
    };

    var onError = function(reason){
      $scope.error = "Could not fetch the data"
    };

    $scope.search = function(username){
      $http.get("https://api.github.com/users/" + $scope.username)
          .then(onUserComplete, onError);
    };

  $scope.message = "Github Viewer!!";
  // $scope.repoSortOrder = "-stargazers_count";
})}());
