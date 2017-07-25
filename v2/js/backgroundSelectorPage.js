function getBg() {

  //var for next link
  var link="#frame";

  var colorsText = '{"colors":[{"id":"000000","value":"black"},';
  colorsText += '{"id":"37473f","value":"blue-grey darken-3"},';
  colorsText += '{"id":"455A64","value":"blue-grey darken-2"},';
  colorsText += '{"id":"546E7A","value":"blue-grey darken-1"},';
  colorsText += '{"id":"3E2723","value":"brown darken-4"},';
  colorsText += '{"id":"4E342E","value":"brown darken-3"},';
  colorsText += '{"id":"5D4037","value":"brown darken-2"},';
  colorsText += '{"id":"6D4C41","value":"brown darken-1"},';
  colorsText += '{"id":"BF360C","value":"deep-orange darken-4"},';
  colorsText += '{"id":"D84315","value":"deep-orange darken-3"},';
  colorsText += '{"id":"E64A19","value":"deep-orange darken-2"},';
  colorsText += '{"id":"F4511E","value":"deep-orange darken-1"},';
  colorsText += '{"id":"004D40","value":"teal darken-4"},';
  colorsText += '{"id":"00695C","value":"teal darken-3"},';
  colorsText += '{"id":"00796B","value":"teal darken-2"},';
  colorsText += '{"id":"00897B","value":"teal darken-1"},';
  colorsText += '{"id":"0D47A1","value":"blue darken-4"},';
  colorsText += '{"id":"1565C0","value":"blue darken-3"},';
  colorsText += '{"id":"1976DE","value":"blue darken-2"},';
  colorsText += '{"id":"1E88E5","value":"blue darken-1"},';
  colorsText += '{"id":"1A237E","value":"indigo darken-4"},';
  colorsText += '{"id":"283593","value":"indigo darken-3"},';
  colorsText += '{"id":"303F9F","value":"indigo darken-2"},';
  colorsText += '{"id":"3949AB","value":"indigo darken-1"},';
  colorsText += '{"id":"B71C1C","value":"red darken-4"},';
  colorsText += '{"id":"C62828","value":"red darken-3"},';
  colorsText += '{"id":"D32F2F","value":"red darken-2"},';
  colorsText += '{"id":"E53935","value":"red darken-1"},';
  colorsText += '{"id":"B9F6CA","value":"green accent-1"},';
  colorsText += '{"id":"FFFF8D","value":"yellow accent-1"},';
  colorsText += '{"id":"82B1FF","value":"blue accent-1"},';
  colorsText += '{"id":"FFFFFF","value":"white"}]}';

  var colorJson = JSON.parse(colorsText);
  var value = colorJson["colors"];
  var chaine = '<h4 class="center-align">Welcome to MediaPanel</h4><h5 class="center-align">Please choose a background color</h5>';
  var i = 0;
  for (var index in value) {
    var obj = value[index];
    if (i == 0) {
      chaine += '<div class="row">'
    }
    chaine += '<div class="col s3"><div id="' + obj["id"] + '" class="square ' + obj["value"] + '"></div></div>'
    if (i == 3) {
      chaine += '</div>';
      i = -1;
    }
    i++;
  }
  chaine+='<div class="row"><a id="btn" href="'+link+'" class="col s2 offset-s5 waves-effect waves-light btn">Continue</a></div>';
  return chaine;
}


function loadServices() {
  var chaine = "";
  chaine += '<div class="daytime"></div><div class="meteo"><div class="weather"><div class="weather-icon"></div><div class="weather-name"></div></div><div class="current-temp"></div><div class="min-max"></div></div>';
  chaine += '<div class="stif"><div class="train-icon"><img class="train" src="img/Circle-icons-train.png"/></div><div class="direction">Direction PARIS : </div><div class="horaire-list"></div></div>';
  chaine += '<footer><a class="credit" href="http://www.freepik.com/free-vector/weather-icons-set_709126.htm">Designed by Freepik</a></footer>';
  return chaine;
}

$("#next").click(
  function () {
    var services = loadServices();
    $("body").addClass("animated slideOutLeft");
    setTimeout(function () {
      $("body").removeClass("animated slideOutLeft");
      $("body").html(services);
      $("body").addClass("animated slideInRight");
    }, 2000);
  },
)


$("#container").on("mouseenter", ".square", function () {
  $(this).addClass("z-depth-4");
}

);

$("#container").on("mouseleave", ".square", function () {
  {
    $(this).removeClass("z-depth-4");
  }
}
);

$("#container").on("click", ".square", function () {
  $("body").css("background-color", "#"+$(this).attr('id'));
  console.log($("body").css("background-color"));
}
)