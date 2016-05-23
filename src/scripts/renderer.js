
const electron = require('electron')
const remote = electron.remote
const mainProcess = remote.require('./main')
document.getElementById('OpenExistingDirButton').addEventListener('click', _ => {
  mainProcess.selectDirectory()
})