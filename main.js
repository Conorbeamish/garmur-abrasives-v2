$( document ).ready(function() {

    // //Changes nav color on scroll 
    // $(function () {
    //   $(document).scroll(function () {
    //     var $nav = $(".fixed-top");
    //     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    //   });
    // });
    
    //Close navbar when clicked off
    $(document).click(function (event) {
      var click = $(event.target);
      var _open = $(".navbar-collapse").hasClass("show");
      if (_open === true && !click.hasClass("navbar-toggler")) {
          $(".navbar-toggler").click();
      }
    });
    
    // //Elements appear on scroll
    // $(window).scroll(function(){
    //   $(".fade-in").each(function(){
    //     var bottomObject = $(this).offset().top + $(this).outerHeight();
    //     var bottomWindow = $(window).scrollTop() + $(window).height();
    //       if (bottomWindow * 1.2 > bottomObject){
    //         $(this).animate({"opacity":"1"}, 1000);
    //       }
    //   })
    // })
  
    // //Check if elements are in view when window loads
    // $(".fade-in").each(function(){
    //   var bottomObject = $(this).offset().top + $(this).outerHeight();
    //   var bottomWindow = $(window).scrollTop() + $(window).height();
    //     if (bottomWindow * 1.2 > bottomObject){
    //       $(this).animate({"opacity":"1"}, 1000);
    //     }
    // })
  });