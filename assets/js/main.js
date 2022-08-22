
// set the date we are counting down to
var countDownDate = new Date("Jan 5,2023 15:37:25").getTime();

// update the count down every 1 second
var x = setInterval(function(){
    // Get today date and Time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hourse, minutes and second
    var days = Math.floor(distance / (1000*60*60*24));
    var hourse = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var second = Math.floor((distance % (1000*60)) / 1000);

//    output the result in an element with id="demo"

// document.getElementById("demo").innerHTML = '<span id="day">' + days + '</span>' + '<span id="hourse">' + hourse + '</span>'
// + '<span id="minutes">' + minutes + '</span>' + '</span>' + '<span id="second">' + second + '</span>';

var z= document.getElementsByClassName("demos");

for(var i=0; i<z.length; i++){

    z[i].innerHTML= '<span id="day">' + days + '</span>' + '<span id="hourse">' + hourse + '</span>'
    + '<span id="minutes">' + minutes + '</span>' + '</span>' + '<span id="second">' + second + '</span>';     
}

// if the count down is over ,write some text
if(distance < 0){
    clearInterval(x);
    // document.getElementById("after-expire").setAttribute("id","offer-expire-text");
    var g =document.getElementsByClassName("after-expire");
    for(var i=0; i < z.length; i++){
        g[i].classList.add("offer-expire-text");
    }
    // document.getElementById("offer-expire-text-inner").innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده";
    var d =document.getElementsByClassName("offer-expire-text-inner");
    for(var i=0; i < z.length; i++){
        d[i].innerHTML= "پیشنهاد ویژه این محصول به پایان رسیده"
    }

    // document.getElementById("offer-blur").style.filter = "blur(1px)";
    var f =document.getElementsByClassName("offer-blur");
    for(var i=0; i < z.length; i++){
        f[i].style.filter= "blur(1px)";
    }

     // document.getElementById("demo").innerHTML = "";
     var y =document.getElementsByClassName("demos");
     for(var i=0;i < z.length;i++){
          y[i].innerHTML="";
     }

}

}, 1000);


//start owl slider

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        rtl:true,
        items:4,
        loop:true,
        margin:0,
        // center:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        slideby:2,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false,
            }
        }
    });
  });

// end owl slider

$(".tt").tooltip("show");

$('.popovers').popover({
    trigger: 'hover'
  });

$(".popovers").popover("show");
 
$(".tot").toast("show");

