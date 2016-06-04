
(function () {
  'use strict';
  angular
      .module('Video-Viewer', ['ngRoute', 'ngMaterial', 'ngAnimate'])
      .controller('VideoViewerController', VideoViewerController);
  function VideoViewerController ($scope, $log) {
    var ipc = electron.ipcRenderer;

    $scope.MainStaticsStyleFile = "../styles/themes/zen-dark-theme/Statics.css"
  }
})();
