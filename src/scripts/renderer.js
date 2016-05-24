'use strict';

var electron = require('electron');
const remote = electron.remote;
var mainProcess = remote.require('./main');

document.getElementById('OpenExistingDirButton').addEventListener('click', _ => {
  mainProcess.selectDirectory()
})