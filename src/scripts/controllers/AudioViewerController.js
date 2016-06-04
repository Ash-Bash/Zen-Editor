
(function () {
  'use strict';
  angular
      .module('Audio-Viewer', ['ngRoute', 'ngMaterial', 'ngAnimate'])
      .controller('AudioViewerController', AudioViewerController);
  function AudioViewerController ($scope, $log) {
    var ipc = electron.ipcRenderer;

    $scope.MainStaticsStyleFile = "../styles/themes/zen-dark-theme/Statics.css"
  }
})();
