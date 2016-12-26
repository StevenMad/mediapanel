var req = new XMLHttpRequest();
req.open('GET' , 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=London,uk&APPID=18f5f1e035cfd691cbb990ac6b06cb24', false);
req.send(null);
if(req.status==200)
{
    var obj = JSON.parse(req.responseText);
    console.log(obj);
    $('.meteo').html(obj['weather'][0]["description"]);
}