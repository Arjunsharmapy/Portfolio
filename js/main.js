$(document).ready(function () {
  $(".burger-container").on("click", function () {
    $(".main-navigation").toggle("slow");

    if ($("#myBtn").hasClass("change")) {
      $("body").addClass("stop-scroll");
    } else {
      $("body").removeClass("stop-scroll");
    }
  });

  $(".about-me-slider").slick({
    slidesToShow: 1,
    prevArrow: '<span class="span-arrow slick-prev"><</span>',
    nextArrow: '<span class="span-arrow slick-next">></span>',
  });

  $(".blog-slider").slick({
    slidesToShow: 2,
    prevArrow: '<span class="span-arrow slick-prev"><</span>',
    nextArrow: '<span class="span-arrow slick-next">></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

var counta = 0;

$(window).scroll(function (e) {
  var statisticNumbers = $(".single-count");
  if (statisticNumbers.length) {
    var oTop = statisticNumbers.offset().top - window.innerHeight;
    if (counta == 0 && $(window).scrollTop() > oTop) {
      $(".count").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              if (this.countNum >= 2000) $this.text(this.countNum + "+");
              else $this.text(this.countNum);
            },
          }
        );
      });
      counta = 1;
    }
  }
});

const text = "<Portofolio>";

let index = 0;

const element = document.getElementById("portofolio-logo");

function updateText() {
  if (index < text.length - 1) {
    element.innerText = text.substring(0, index + 1) + "_";
    index++;
    setTimeout(updateText, 300 - index * 10);
  } else {
    element.innerText = text;
    setTimeout(hideLastChar, 500);
  }
}

function hideLastChar() {
  element.innerText = text.substring(0, text.length - 1) + "_";
  setTimeout(showLastChar, 500);
}

function showLastChar() {
  element.innerText = text;
  setTimeout(hideLastChar, 500);
}

updateText();
