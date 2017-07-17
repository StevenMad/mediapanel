function loadServices()
{
  var chaine = "";
  chaine+='<div class="daytime"></div><div class="meteo"><div class="weather"><div class="weather-icon"></div><div class="weather-name"></div></div><div class="current-temp"></div><div class="min-max"></div></div>';
  chaine+='<div class="stif"><div class="train-icon"><img class="train" src="img/Circle-icons-train.png"/></div><div class="direction">Direction PARIS : </div><div class="horaire-list"></div></div>';
  chaine+='<footer><a class="credit" href="http://www.freepik.com/free-vector/weather-icons-set_709126.htm">Designed by Freepik</a></footer>';
  return chaine;
}
$(".square").hover(
  function()
  {
    $(this).addClass("z-depth-4");
  },function()
  {
    $(this).removeClass("z-depth-4");
  }
);

$(".square").click(
  function()
  {
    $("body").css("background-color",$(this).attr('id'));
  }
)

$("#next").click(
  function()
  {
    var services = loadServices();
    $("body").addClass("animated slideOutLeft");
    setTimeout(function()
    {
      $("body").removeClass("animated slideOutLeft");
      $("body").html(services);
      $("body").addClass("animated slideInRight");
    },2000);
  },
)