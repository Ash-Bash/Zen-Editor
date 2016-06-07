
(function () {
  'use strict';
  angular
      .module('Code-Editor', ['ngRoute', 'ngMaterial', 'ngAnimate'])
      .controller('CodeEditorController', CodeEditorController);
  function CodeEditorController ($scope, $log) {
    var ipc = electron.ipcRenderer;

    var themeListJsonFile = fs.readFileSync('./src/styles/themes/theme_list.json');
    var themeListData = JSON.parse(themeListJsonFile);
    var themeList = themeListData.list;
    console.log(JSON.parse(themeListJsonFile));
    var themeJsonFile = fs.readFileSync(themeList[0].dir);
    var themeJsonData = JSON.parse(themeJsonFile);
    console.log(themeJsonData);
    var themeData = themeJsonData.theme;

    //var theme = themeManager.ThemeManager('');

    var editorSchema = themeData[0].colors;
    var infobarSchema = themeData[1].colors;
    var textColorSchema = themeData[2].colors;

    $scope.MainStaticsStyleFile = "../" + themeData[3].dir;

    $scope.BackgroundStyle = {
        'background-color': editorSchema.primary
    };

  }
})();
