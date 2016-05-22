var fs = require('fs');

(function () {
  'use strict';
  angular
      .module('Zen-Editor', ['ngRoute', 'ngMaterial', 'ngAnimate'])
      .controller('EditorController', EditorController);
  function EditorController ($scope, $log) {
      
   this.topDirections = ['left', 'up'];
   this.bottomDirections = ['down', 'right'];
   this.isOpen = false;
   this.availableModes = ['md-fling', 'md-scale'];
   this.selectedMode = 'md-scale';
   this.availableDirections = ['up', 'down', 'left', 'right'];
   this.selectedDirection = 'down';
   
   $scope.fileType = ".html";
    
    var tabs = [
          { title: 'Start-Up', content: "", view_type: "start_menu", view: "./frames/start_menu.html"},
          { title: 'Two', content: "", view_type: "code_editor", view: "./frames/code_editor.html"},
          { title: 'Three', content: "", view_type: "code_editor", view: "./frames/code_editor.html"},
          { title: 'Four', content: "", view_type: "code_editor", view: "./frames/code_editor.html"},
          { title: 'Five', content: "", view_type: "code_editor", view: "./frames/code_editor.html"},
          { title: 'Six', content: "", view_type: "code_editor", view: "./frames/code_editor.html"},
          { title: 'Seven', content: "", view_type: "code_editor", view: "./frames/code_editor.html"},
          { title: 'Eight', content: "", view_type: "code_editor", view: "./frames/code_editor.html"},
          { title: 'Nine', content: "", view_type: "code_editor", view: "./frames/code_editor.html"},
          { title: 'Ten', content: "", view_type: "code_editor", view: "./frames/code_editor.html"}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 0;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
    });
    $scope.addTab = function (title, content, view_type, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: content, view_type: view_type, view: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
    
    $scope.$on('removeTab', function(event, tab) {
        var index = tabs.indexOf(tab);
        tabs.splice(index, 1);
    });
    
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
    
    $scope.scriptMode = "javascript";
    
  }
})();