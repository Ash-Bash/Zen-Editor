
(function () {
  'use strict';
  angular
      .module('Image-Viewer', ['ngRoute', 'ngMaterial', 'ngAnimate'])
      .controller('ImageViewerController', ImageViewerController);
  function ImageViewerController ($scope, $log) {
    var ipc = electron.ipcRenderer;

    $scope.MainStaticsStyleFile = "../styles/themes/zen-dark-theme/Statics.css"
  }
})();
