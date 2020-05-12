/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



/*
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick2 = function(event) {
if (!event.target.matches('.dropbtn2')) {

  var dropdowns2 = document.getElementsByClassName("dropdown-content2");
  var b;
  for (b = 0; b < dropdowns2.length; b++) {
    var openDropdown2 = dropdowns2[b];
    if (openDropdown2.classList.contains('show2')) {
      openDropdown2.classList.remove('show2');
    }
  }
}
}
*/
$('.navbar-nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });
  s.toggleClass("open")