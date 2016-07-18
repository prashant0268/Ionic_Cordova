// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // $ionicPopup.alert({
    //   title: 'Don\'t eat that!',
    //   template: 'test alert'
    // });


  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    .state('app.cordova', {
      url: '/cordova',
      views: {
        'menuContent': {
          templateUrl: 'templates/cordova-list.html',
          controller: 'CordovaCtrl'
        }
      }
    })
    .state('app.ionic', {
      url: '/ionic',
      views: {
        'menuContent': {
          templateUrl: 'templates/ionic-list.html',
          controller: 'IonicCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/cordova/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'CordovaItemCtrl'
      }
    }
  })
    .state('app.single-ionic', {
    url: '/ionic/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/ionic-item.html',
        controller: 'IonicItemCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cordova');
});
