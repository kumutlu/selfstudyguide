$('.menu-toggle').on('click', function(){

  $('.menu').toggleClass('active');
  $('.main-content').toggleClass('active');

});






function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

myFunction()