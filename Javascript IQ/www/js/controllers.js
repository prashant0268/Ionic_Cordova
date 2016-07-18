angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CordovaCtrl', function($scope, cordovaData) {
  $scope.playlists = cordovaData.cordovaList();
})
.controller('IonicCtrl', function($scope, cordovaData) {
  $scope.playlists = cordovaData.ionicList();
})
.controller('IonicItemCtrl', function($scope, $stateParams, cordovaData) {
  $scope.ionicId = $stateParams.playlistId;
  $scope.ionicFeatureName = cordovaData.ionicList().filter(function(val){
    return val.id == $stateParams.playlistId;
  })[0].title;

    
    
    
})
.controller('CordovaItemCtrl', function($scope, $stateParams, cordovaData) {
  $scope.cordovaId = $stateParams.playlistId;
  $scope.cordovaFeatureName = cordovaData.cordovaList().filter(function(val){
    return val.id == $stateParams.playlistId;
  })[0].title;

  //Battery
  $scope.batteryPercentage = '43';

  window.addEventListener("batterystatus", function (status) {
    var msg = "Level: " + status.level + " isPlugged: " + status.isPlugged;
    // $ionicPopup.alert({
    //   title: 'Don\'t eat that!',
    //   template: msg
    // });
  }, false);

  $scope.isBatteryLow = false;
  window.addEventListener("batterylow", onBatteryLow, false);

  function onBatteryLow(status) {
    $scope.isBatteryLow = true;
  }

  $scope.isBatteryCritical = false;
  window.addEventListener("batterycritical", onBatteryCritical, false);

  function onBatteryCritical(status) {
    $scope.isBatteryCritical = true;
  }

  //Camera

  $scope.takePicture = function(){

  }
  $scope.choosePicture = function(){
    
  }
  var device = device || {};
    
  $scope.deviceInfo = {
    "model": device.model,
    "platform": device.platform,
    "uuid": device.uuid,
    "version": device.version,
    "manufacturer": device.manufacturer,
    "serial": device.serial
  }

  $scope.launchInAppBrowser = function(){
    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
  }

});
