// Resizing Banner Image
$(document).ready(function () {
    if (window.matchMedia("(max-width: 900px)").matches) {
      $(".big-banner").removeClass("hidden");
      $(".small-banner").addClass("hidden");
    } else {
      $(".small-banner").removeClass("hidden");
      $(".big-banner").addClass("hidden");
    }
  });

  $(window).on("resize", function () {
    if (window.matchMedia("(max-width: 900px)").matches) {
      $(".big-banner").removeClass("hidden");
      $(".small-banner").addClass("hidden");
    } else {
      $(".small-banner").removeClass("hidden");
      $(".big-banner").addClass("hidden");
    }
  });
