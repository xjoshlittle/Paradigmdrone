
const slideImg = document.getElementById("slideImg");

const images = new Array (
         "images/photo1.jpg",
          "images/photobanner2.jpg",
          "images/photobanner3.jpg",
          "images/photonanner4.jpg"

);

const len = images.length;
let i = 0;

function slider(){
    if (i > len-1) {
    i = 0;
}
    slideImg.src = images[i];
     i ++;
    setTimeout('slider()', 2000);

}


function myFunction() {
    const x = document.getElementById("myTopNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
