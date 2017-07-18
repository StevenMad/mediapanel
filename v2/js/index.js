var page = getPage();
updatePage(page);
$("#btn").click(function (event) {
   var url = $(this).attr('href');
   url = url.substring(1,url.length);
   console.log("upadting");
   updatePage(url);
})
function getPage() {
   var url = document.location.href;
   var res = url.match(/#(.*)/g)
   if (res == null)
      return "";
   res = res.toString();
   res = res.substring(1, res.length);
   return res;
}

function updatePage(page) {
   if (page == "") {
      $("#bg-container").removeClass("animated slideInRight");
      $("#bg-container").addClass("animated slideOutLeft");
      setTimeout(function()
      {
         $("#bg-container").html("coucou");
         $("#bg-container").removeClass("animated slideOutLeft");
         $("#bg-container").addClass("animated slideInRight");
      },1000);
   }
   if (page == "view") {
      $("#bg-container").removeClass("animated slideInRight");
      $("#bg-container").addClass("animated slideOutLeft");
      setTimeout(function()
      {
         $("#bg-container").html("Vue ou pas vue");
         $("#bg-container").removeClass("animated slideOutLeft");
         $("#bg-container").addClass("animated slideInRight");
      },1000);
   }
   if (page == "panel") {
      $("#bg-container").removeClass("animated slideInRight");
      $("#bg-container").addClass("animated slideOutLeft");
      setTimeout(function()
      {
         $("#bg-container").html("panel ou pas");
         $("#bg-container").removeClass("animated slideOutLeft");
         $("#bg-container").addClass("animated slideInRight");
      },1000);
   }
}