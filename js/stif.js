var req = new XMLHttpRequest();
req.open('GET' , 'https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:OCE:SA:87545301/departures', false);
//fr-idf/stop_area:OIF:SA:8754530/departures
//line:OIF:013013105:COIF507
//stop_area:OIF:SA:8754530
//req.open('GET' , 'https://api.navitia.io/v1/coverage/fr-idf/pt_objects?q=ivry', false);
req.setRequestHeader("Authorization","5ebaef96-18ab-4de4-90a7-35883bf675ef")
// navitia req.setRequestHeader("Authorization","1c33eb25-6366-41e3-afb2-e21d1a5693ce")
req.send(null);
if(req.status==200)
{
    var obj = JSON.parse(req.responseText);
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
            case "Chaville-Velizy (Velizy)":horaires+='<div class="horaire-item">'+addDate(liste[i])+"</div>";break;
        }
    }
    $('.horaire-list').html(horaires);
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