
(function () {
  'use strict';
  angular
      .module('Code-Editor', ['ngRoute', 'ngMaterial', 'ngAnimate'])
      .controller('CodeEditorController', CodeEditorController);
  function CodeEditorController ($scope, $log) {
    var ipc = electron.ipcRenderer;

    $scope.MainStaticsStyleFile = "../styles/themes/zen-dark-theme/Statics.css"
  }
})();
