var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var palabra;
palabra = txt;
var speed = 200; /* The speed/duration of the effect in milliseconds */
const nombre = document.querySelector("#demo");

function redirect() {
    var url = "https://www.facebook.com/sergio.tahocesguitian";
    window.location(url);
}

function typeWriter() {
    for (let i = 0; i < txt.length; i++) {
        nombre.innerText += txt.charAt(i);
        setTimeout(typeWriter, speed);
    }
    // Call carousel manually
    $('#myCarouselCustom').carousel();

    // Go to the previous item
    $("#prevBtn").click(function () {
        $("#myCarouselCustom").carousel("prev");
    });
    // Go to the previous item
    $("#nextBtn").click(function () {
        $("#myCarouselCustom").carousel("next");
    });

    //   if (i < txt.length) {
    //     p.innerText += txt.charAt(i);
    //     i++;
    //     setTimeout(typeWriter, speed);
    //   }
}
typeWriter();