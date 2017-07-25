var page = getPage();
updatePage(page);
$("#container").on("click","#btn",function() {
   var url = $(this).attr('href');
   url = url.substring(1,url.length);
   updatePage(url);
});

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
      $("#container").removeClass("animated slideInRight");
      $("#container").addClass("animated slideOutLeft");
      setTimeout(function()
      {
         var bgContent = getBg();
         $("#container").html(bgContent);
         $("#container").removeClass("animated slideOutLeft");
         $("#container").addClass("animated slideInRight");
      },1000);
   }
   if (page == "frame") {
      $("#container").removeClass("animated slideInRight");
      $("#container").addClass("animated slideOutLeft");
      setTimeout(function()
      {
         var frameContent = getFrame();
         $("#container").html(frameContent);
         $("#container").removeClass("animated slideOutLeft");
         $("#container").addClass("animated slideInRight");
      },1000);
   }
   if (page == "panel") {
      $("#container").removeClass("animated slideInRight");
      $("#container").addClass("animated slideOutLeft");
      setTimeout(function()
      {
         $("#container").html("panel ou pas");
         $("#container").removeClass("animated slideOutLeft");
         $("#container").addClass("animated slideInRight");
      },1000);
   }
}