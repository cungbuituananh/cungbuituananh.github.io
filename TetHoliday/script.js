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

filterSelection("all")
function filterSelection(c) {
  var x, i; 
  x = document.getElementsByClassName("item"); 
  if ( c == "all") c == ""; 
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