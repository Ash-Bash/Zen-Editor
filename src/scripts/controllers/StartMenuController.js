//Start Menu Controller Script

(function () {
  'use strict';
  angular
      .module('Start-Menu', ['ngRoute', 'ngMaterial', 'ngAnimate'])
      .controller('StartMenuController', StartMenuController);
  function StartMenuController ($scope, $log) {
    var ipc = electron.ipcRenderer;

    $scope.MainStaticsStyleFile = "../styles/themes/zen-dark-theme/Statics.css"
  }
})();
