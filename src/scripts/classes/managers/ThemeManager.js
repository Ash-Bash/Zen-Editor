
function readJSONFile (file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

exports.LoadThemeList = function(){

  var themeList = "";
  readJSONFile("../styles/themes/theme_list.json", function(text) {
    themeList = text;
    console.log(themeList);
    return text;
  });
}

exports.ThemeManager = function (themeId) {
  // dialog.showOpenDialog as before
  //Loads The Theme List from styles
  var themeList = "";
  var theme = "";

  fileManager.readJSONFile("../styles/themes/theme_list.json", function(text) {
    themeList = text;
    console.log(text);
  });

  return theme;
}
