

  // LOAD
  $(document).ready(function () {
    if (window.matchMedia("(max-width: 900px)").matches){
      $("#ham-menu").removeClass("hidden");
      $("#home_nav").addClass("hidden");
    } else {
      $("#ham-menu").addClass("hidden");
      $("#home_nav").removeClass("hidden");
    }
  });

  // RESIZE
  $(window).on("resize", function () {
    if (window.matchMedia("(max-width: 900px)").matches) {
      $("#ham-menu").removeClass("hidden");
      $("#home_nav").addClass("hidden");
    } else {
      $("#ham-menu").addClass("hidden");
      $("#home_nav").removeClass("hidden");
    }
  });

  // CLICK
  $("#ham-menu").on("click", function () {
    if ($("#home_nav").hasClass("hidden")) {
      $("#home_nav").removeClass("hidden");
    } else {
      $("#home_nav").addClass("hidden");
    }
  });
