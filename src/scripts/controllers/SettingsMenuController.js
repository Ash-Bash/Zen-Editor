
(function () {
  'use strict';
  angular
      .module('Settings-Menu', ['ngRoute', 'ngMaterial', 'ngAnimate'])
      .controller('SettingsMenuController', SettingsMenuController);
  function SettingsMenuController ($scope, $log) {
    var ipc = electron.ipcRenderer;

    $scope.MainStaticsStyleFile = "../styles/themes/zen-dark-theme/Statics.css"
  }
})();
