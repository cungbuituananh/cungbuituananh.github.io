$('.slider-wrapper').slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 1
        }
      }
    ]
  });

  // Gallery
filterSelection("all") 
function filterSelection(c) {
  var x, i; 
  x = document.getElementsByClassName("item"); 
  if ( c == "all") c = ""; 
  for ( i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2; 
  arr1 = element.className.split(" ");
  arr2 = name.split(" "); 
  for ( i = 0; i < arr2.length; i++) {
    if ( arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2; 
  arr1 = element.className.split(" ");
  arr2 = name.split(" "); 
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) >  -1)  {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ")
}

var btnContainer = document.getElementById("gallery-btn");
var btns = btnContainer.getElementsByClassName("btn");

// Lỗi thêm 2 class active 
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// teacher Bar fix bug
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    this.classList.add("active");
  });
}

// Button next - prev feature part 
$("#next").click(function() {
  $(".slider-wrapper").slick("slickNext");
})

$("#prev").click(function() {
  $(".slider-wrapper").slick("slickPrev");
})

// navbar sticky  
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}