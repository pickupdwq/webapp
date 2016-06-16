angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('welcomeCtrl', function($scope) {
  $scope.welcome={
    'page1':'第一頁',
    'page2':'第二頁',
    'page3':'開始使用',
    'enter':'進入'
  }
  $scope.slideHasChanged=function(index){
      switch (index){
        case 1:
        $scope.page1="";
        $scope.page3="";
        $scope.page2="page2";
        $scope.button_enter_active="";
        break;
        case 2:
        $scope.page2="";
        $scope.page3="page3";
        $scope.button_enter_active="button-enter-active";
        break;
        default:
        $scope.button_enter_active="";
        $scope.page1="page1";
        $scope.page2="";
        $scope.page3="";
      }
  }
})
.controller('signInCtrl', function($scope) {
  $scope.user={
    'imgPath':'img/sign.png'
  }
  $scope.info={
    'forget':'忘記密碼',
    'signup':'申請賬號',
    'login':'登陸',
    'test':'无账号登陆'
  }
  $scope.infoValid=function(){
    console.log($scope.user);
  }
})
.controller('forgetCtrl', function($scope) {
  
})
.controller('signupCtrl', function($scope) {
  
})
.controller('homeCtrl', function($scope) {
    $scope.homeInfo=[
      {'img':'img/slider/s1.jpg'},
      {'img':'img/slider/s2.jpg'},
      {'img':'img/slider/s3.jpg'},
      {'img':'img/slider/s4.jpg'},
      ]
})
.controller('tabCtrl', function($scope) {
  
})
.controller('marketCtrl', function($scope) {
  
})
.controller('aboutCtrl', function($scope) {
  
})
