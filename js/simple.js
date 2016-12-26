var req = new XMLHttpRequest();
req.open('GET' , 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=Paris,fr&APPID=18f5f1e035cfd691cbb990ac6b06cb24', false);
req.send(null);
if(req.status==200)
{
    var obj = JSON.parse(req.responseText);
    console.log(obj)
    var chaine = obj['weather'][0]["description"];
    $('.current-temp').html(obj['main']['temp']+" ° C");
    var min = obj['main']['temp_min']+" ° C";
    var max = obj['main']['temp_min']+" ° C";
    $('.min-max').html('MIN : '+min+' - MAX : '+max)
    $('.weather-icon').html(addImage(chaine));
}

function addImage(description)
{
    var id=1;
    switch(description)
    {
        case "clear sky":{id=1;break;}
        case "few clouds":{id=2;break;}
        case "scattered clouds":{id=3;break;}
        case "broken clouds":{id=4;break;}
        case "shower rain":{id=5;break;}
        case "rain":{id=6;break;}
        case "snow":{id=7;break;}
        case "light shower snow":{id=7;break;}
        case "thunderstorm":{id=8;break;}
        case "mist":{id=9;break;}
        case "haze":{id=9;console.log("hello world");break;}
    }
    return '<img src="/img/'+id+'.png"></>';
}

function addInfo()
{

}

function showTemp()
{

}