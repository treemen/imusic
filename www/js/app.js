// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('imusic', ['ionic','imusic.controllers', 'imusic.services',])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    // setup an abstract state for the tabs directive
    .state('music', {
      url: "/music",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller:function($scope){
        //接入微信浏览器判断，主要判断WeixinJSBridge，如果存在则显示收藏，负责隐藏
        if (typeof WeixinJSBridge == "undefined"){
          $scope.isWeChat = false;
        }
      }
    })
    // Each tab has its own nav history stack:
    .state('music.list', {
      url: '/list',
      views: {
        'menuContent': {
          templateUrl: 'templates/music-list.html',
          controller: 'MusicListCtrl'
        }
      }
    })
    .state('music.songbook', {
      url: '/songbook',
      views: {
        'menuContent': {
          templateUrl: 'templates/music-songbook.html',
          controller: 'SongBookCtrl'
        }
      }
    })
     .state('music.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/music-search.html',
          controller: 'SearchCtrl'
        }
      }
    })
    .state('music.like', {
      url: '/like',
      views: {
        'menuContent': {
          templateUrl: 'templates/music-like.html',
          controller: 'MusicLikeCtrl'
        }
      }
    })
    .state('music.detail', {
      url: '/detail/:playlistId',
      views: {
        'menuContent': {
          templateUrl: 'templates/music-detail.html',
          controller: 'MusicDetailCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/music/list');

});

