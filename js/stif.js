updateTrain();
var time = setInterval(updateTrain,60000);

function updateTrain()
{
    $.ajax({
        type:'GET',
        url:'https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:OCE:SA:87545301/departures',
        headers:{'Authorization':'5ebaef96-18ab-4de4-90a7-35883bf675ef'},
        success:function(obj,type,xhr){
            var liste = obj['departures'];
            var horaires='';
            for(var i=0;i<liste.length;i++)
            {
                var direction = liste[i]['display_informations']['direction'];
                console.log(direction);
                switch(direction)
                {
                    case "Montigny-Beauchamp (Beauchamp)":horaires+='<div class="horaire-item">'+addDate(liste[i])+"</div>";break;
                    case "Pontoise (Pontoise)":horaires+='<div class="horaire-item">'+addDate(liste[i])+"</div>";break;
                    case "Chaville-Velizy (Viroflay)":horaires+='<div class="horaire-item">'+addDate(liste[i])+"</div>";break;
                }
            }
            $('.horaire-list').html(horaires);    
            }
    })
}

//84465dc0215e560016e05fb30acc8427b88cd55b41e24285c7fc4a89 
//48.814222, 2.391250
//ivry stop_area:OCE:SA:87545301
//line:OCE:SN-87382218-87382481

function addDate(objet)
{
    //20161227T181200
    var horaire = objet['stop_date_time']['arrival_date_time'].substring(9);
    var heure = horaire.substring(0,2);
    var min = horaire.substring(2,4);
    return heure+":"+min;
}