
(function () {
  'use strict';
  angular
      .module('Start-Menu', ['ngRoute', 'ngMaterial', 'ngAnimate'])
      .controller('StartMenuController', StartMenuController);
  function StartMenuController ($scope, $log) {
      
      /*const remote = require('electron').remote;
      const ipc = remote.ipcRenderer
      const openExistingDirBtn = document.getElementById('OpenExistingDirButton')

      openExistingDirBtn.addEventListener('click', function (event) {
        ipc.send('open-file-dialog')
      })

      ipc.on('OpenExistingDirButton', function (event, path) {
        //document.getElementById('selected-file').innerHTML = `You selected: ${path}`
      })*/  
  }
})();