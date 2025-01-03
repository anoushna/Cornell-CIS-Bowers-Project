const SLIDES = $(".slide");
const DOTS = $(".dots");

function nextSlide() {
    let nextNum = SLIDES.index($(".slide:not(.accessible-hidden)")) + 1 + 1;
    if (nextNum > SLIDES.length) {
        nextNum = 1;
    }
    showSlide(nextNum);
}

function prevSlide() {
    let prevNum = SLIDES.index($(".slide:not(.accessible-hidden)")) - 1 + 1;
    if (prevNum <= 0) {
        prevNum = SLIDES.length;
    }
    showSlide(prevNum);
}

function showSlide(num) {
    let index = num - 1;
    let currentSlide = SLIDES.eq(index);
    SLIDES.addClass('accessible-hidden');
    currentSlide.removeClass('accessible-hidden');
    let currentDot = DOTS.eq(index);
    DOTS.removeClass('highlighted_dot');
    DOTS.eq(index).addClass('highlighted_dot');
}

$(document).ready(function() {
    $("#dot1").addClass("highlighted_dot");
  });

$("#next_slide").on("click", function () {
    nextSlide();
});

$("#prev_slide").on("click", function () {
    prevSlide();
});

$("#dot1").on('click', function () {
    showSlide(1);
});

$("#dot2").on('click', function () {
    showSlide(2);
});

$("#dot3").on('click', function () {
    showSlide(3);
});
