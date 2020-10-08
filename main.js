$( document ).ready(function() {

    //Changes nav color on scroll 
    $(function () {
      $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });
    
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

     //Handle form submit
     $("#form").submit(function(event){
      var data = {
          name: $("#name").val(),
          number: $("#number").val(),
          email: $("#email").val(),
          company: $("#company").val(),
          enquiry: $("#enquiry").val()
      }
      $("form-error").addClass("hidden");
      $.ajax({
          url: "https://formspree.io/f/mgepopwo",
          method: "POST",
          dataType: "json",
          data: data,
          success: function(){
              $("#form-button").addClass("hidden");
              $("#form-success").removeClass("hidden");
          },
          error: function(){
              $("#form-error").removeClass("hidden");
          }
      })
      event.preventDefault();
  })
  });