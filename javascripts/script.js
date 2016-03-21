$(document).ready(function() {
  $('#fullpage').fullpage({
    fitToSection: false,
    verticalCentered: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    css3: true,
    afterRender: function () {
      setInterval(function () {
        $.fn.fullpage.moveSlideRight();
      }, 5000);
    }
  });
});


  // var slideTimeout;
  // $('#fullpage').fullpage({
  //   fitToSection: false,
  //   verticalCentered: false,
  //   slidesNavigation: true,
  //   slidesNavPosition: 'bottom',
  //   css3: true,
  //   afterRender: function () {  
  //       //on page load, start the slideshow
  //       slideTimeout = setInterval(function () {
  //         $.fn.fullpage.moveSlideRight();
  //       }, 5000);
  //     }
  //   });