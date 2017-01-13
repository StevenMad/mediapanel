setInterval(getDate,1000);
var t=setInterval(updateWeather,1000);
var i=0;
getDailyWeather();
setInterval(getDailyWeather,60000*60*10);
function updateWeather()
{
    $.ajax({
        type:'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=Paris,fr&APPID=18f5f1e035cfd691cbb990ac6b06cb24',
        success:function(obj,status,xhr){
            var chaine = obj['weather'][0]["description"];
            $('.current-temp').html(obj['main']['temp']+" ° C");
            $('.weather-name').html(chaine);
            $('.weather-icon').html(addImage(chaine));
            i++
            console.log(i+" updated");
        }
    })
}

function getDailyWeather()
{
    $.ajax({
        type:'GET',
        url:'http://api.openweathermap.org/data/2.5/forecast?units=metric&q=Paris,fr&APPID=18f5f1e035cfd691cbb990ac6b06cb24',
        success:function(obj,status,xhr){
            console.log(obj);
            getMinMax(obj['list']);
        }
    })
}

function getMinMax(list)
{
    var min=100;
    var max=-100;
    for(var i=0;i<list.length;i++)
    {
        if(isDailyDate(list[i]['dt']))
        {
            if(list[i]['main']['temp']<min)
            {
                min=list[i]['main']['temp'];
            }
            if(list[i]['main']['temp']>max)
            {
                max=list[i]['main']['temp'];
            }
        }
    }
    $('.min-max').html('MIN : '+min+'°C - MAX : '+max+'°C');
}

function isDailyDate(datetime)
{
    var date = new Date(datetime * 1000);
    var day = getTime(date.getDate());
    var month = getTime(date.getMonth()+1);

    var currentDate = new Date();
    var currentDay = getTime(currentDate.getDate());
    var currentMonth = getTime(currentDate.getMonth()+1);
    if(day==currentDay && month==currentMonth)
        return true;
    return false;
}

function getDate()
{
    $.ajax({
        success:function(obj,status,xhr)
        {
            var currentdate = new Date(); 
            var datetime = "Today : " + getTime(currentdate.getDate()) + "/"
                    + getTime((currentdate.getMonth()+1))  + "/" 
                    + getTime(currentdate.getFullYear()) + " <br/>"  
                    + getTime(currentdate.getHours()) + ":"  
                    + getTime(currentdate.getMinutes()) + ":" 
                    + getTime(currentdate.getSeconds());
            $('.daytime').html(datetime);
        }
    })
}

function getTime(time)
{
    if(time<10)
        return '0'+time;
    return time;
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
        case "light intensity drizzle":{id=5;break;}
        case "shower rain":{id=5;break;}
        case "light rain":{id=5;break;}
        case "rain":{id=6;break;}
        case "light snow":{id=7;break;}
        case "snow":{id=7;break;}
        case "light shower snow":{id=7;break;}
        case "thunderstorm":{id=8;break;}
        case "fog":{id=9;break;}
        case "mist":{id=9;break;}
        case "haze":{id=9;break;}
    }
    return '<img src="/img/'+id+'.png"></>';
}

function addInfo()
{

}

function showTemp()
{

}
