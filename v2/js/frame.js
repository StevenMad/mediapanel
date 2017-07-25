var panel = '{"size":[{"id":"small","value":"s12 m4"},{"id":"medium","value":"s12 m8"},{"id":"large","value":"s12 m12"}],';
panel += '"widgets":[{"id":"clock"},{"id":"trains"},{"id":"weather"},{"id":"homekit"}],';
panel += '"colors":[{"id":"000000","value":"black"},';
panel += '{"id":"37473f","value":"blue-grey darken-3"},';
panel += '{"id":"455A64","value":"blue-grey darken-2"},';
panel += '{"id":"546E7A","value":"blue-grey darken-1"},';
panel += '{"id":"3E2723","value":"brown darken-4"},';
panel += '{"id":"4E342E","value":"brown darken-3"},';
panel += '{"id":"5D4037","value":"brown darken-2"},';
panel += '{"id":"6D4C41","value":"brown darken-1"},';
panel += '{"id":"BF360C","value":"deep-orange darken-4"},';
panel += '{"id":"D84315","value":"deep-orange darken-3"},';
panel += '{"id":"E64A19","value":"deep-orange darken-2"},';
panel += '{"id":"F4511E","value":"deep-orange darken-1"},';
panel += '{"id":"004D40","value":"teal darken-4"},';
panel += '{"id":"00695C","value":"teal darken-3"},';
panel += '{"id":"00796B","value":"teal darken-2"},';
panel += '{"id":"00897B","value":"teal darken-1"},';
panel += '{"id":"0D47A1","value":"blue darken-4"},';
panel += '{"id":"1565C0","value":"blue darken-3"},';
panel += '{"id":"1976DE","value":"blue darken-2"},';
panel += '{"id":"1E88E5","value":"blue darken-1"},';
panel += '{"id":"1A237E","value":"indigo darken-4"},';
panel += '{"id":"283593","value":"indigo darken-3"},';
panel += '{"id":"303F9F","value":"indigo darken-2"},';
panel += '{"id":"3949AB","value":"indigo darken-1"},';
panel += '{"id":"B71C1C","value":"red darken-4"},';
panel += '{"id":"C62828","value":"red darken-3"},';
panel += '{"id":"D32F2F","value":"red darken-2"},';
panel += '{"id":"E53935","value":"red darken-1"},';
panel += '{"id":"B9F6CA","value":"green accent-1"},';
panel += '{"id":"FFFF8D","value":"yellow accent-1"},';
panel += '{"id":"82B1FF","value":"blue accent-1"},';
panel += '{"id":"FFFFFF","value":"white"}]}';

function getFrame() {
   var chaine = '<div class="row">';
   chaine += createDrawer();
   chaine += createContentPanel();
   chaine += '</div>';
   return chaine;
}

function createDrawer() {
   var chaine = '<div id="drawer" class="collection col s4 l2">';
   chaine += '<div class="collection-item">';
   chaine += createSizeDrawer();
   chaine += '</div>';
   chaine += '<div class="collection-item">';
   chaine += createModuleDrawer();
   chaine += '</div>';
   chaine += '<div class="collection-item">';
   chaine += createColorDrawer();
   chaine += '</div></div>';
   return chaine;
}

function createContentPanel() {
   var chaine = '<div id="contentPanel" class="col s8 l10"></div>';
   return chaine;
}

function createSizeDrawer() {
   var chaine = '<div><h5>Select your size</h5></div>';
   var panelJSON = JSON.parse(panel);
   var sizeArray = panelJSON["size"];
   for (var index in sizeArray) {
      var obj = sizeArray[index];
      console.log(obj);
      chaine += '<div class="row"><div class="btn col ' + obj["value"] + '">' + obj["id"] + '</div></div>';
   }
   return chaine;
}

function createModuleDrawer() {
   var chaine = '<div><h5>Now the widget</h5></div>';
   var panelJSON = JSON.parse(panel);
   var moduleArray = panelJSON["widgets"];
   chaine+='<div class="row">';
   for (var index in moduleArray) {
      var obj = moduleArray[index];
      chaine += '<div class="col s5 square-btn"><p>'+obj["id"]+'</p></div>';
   }
   chaine += '</div>';
   return chaine;
}

function createColorDrawer() {
   var chaine = '<div><h5>And the color you desire</h5></div>';
   var panelJSON = JSON.parse(panel);
   var colorArray = panelJSON["colors"];
   var i=0;
   for (var index in colorArray) {
      var obj = colorArray[index];
      if (i == 0) {
         chaine += '<div class="row">'
      }
      chaine += '<div class="col s3"><div id="' + obj["id"] + '" class="square-color ' + obj["value"] + '"></div></div>'
      if (i == 3) {
         chaine += '</div>';
         i = -1;
      }
      i++;
   }
   chaine += '</div>';
   return chaine;
}