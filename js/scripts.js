$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });

  $(function () {
    $('.SendEmail').click(function (event) {
      var email = 'mattiabaldinazzoproject@gmail.com';
      var subject = 'Request CV';
      var emailBody = 'Hi, I am ... and I am interested in your studies and career path, could you kindly send me your CV?';
      // var attach = 'path';
      document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody/*+"?attach="+attach;*/
    });
  });

  function showBooks() {
    var x = document.getElementById("booksHidden");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  function hideBooks() {
    var x = document.getElementById("booksHidden");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

});

