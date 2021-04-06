function fullPic(x) {
  x.style.objectFit = "fill";
  x.style.width = "400px";
}
function normal(x) {
  x.style.objectFit = "cover";
  x.style.width = "205px";
  x.style.height = "400px";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function getFood(){
    i.getElementById("pic1").getAttribute("src");
    document.getElementById("pic").src=i;
}