/// <reference types="../@types/jquery" />





document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



















$('.close-btn').on('click',function(){
$('.left-nav').animate({width:'0'},600)
$('.open').animate({left:'0'},600)
})

$('.open').on('click',function(){
    $('.left-nav').animate({width:'250px'},600)
    $('.open').animate({left:'260px'},600)

    })

    
       
            $('.card-hed').on('click', function(event) {
                event.preventDefault();
                var par = $(this).next('.card-par');  
                
                if (par.is(':visible')) {
                    par.slideUp(); 
                } else {
            
                    $('.card-par').slideUp();
                    par.slideDown(); 
                }
            });

// ///////////////////////////////Detail//////////////////////////////////////////
            let countDownDate=new Date("july 2,2025 0:00:00 ").getTime();
let counter =setInterval(()=>{


let dateNow=new Date().getTime();

let dateDiff =countDownDate-dateNow;


let days =  Math.floor(dateDiff/(1000*60*60*24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

document.querySelector(".days").innerHTML=days;
document.querySelector(".hours").innerHTML=hours;
document.querySelector(".minuts").innerHTML=minutes;
document.querySelector(".seconds").innerHTML=seconds;

if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);



































// ////////////////////////////contactUs/////////////////////////////////
$("textarea").keyup(function(){
    let word = $(this).val().length;
    let cartona = ""; 
    
    if (word >= 100) {
        cartona = "your available character finished";
    } else {
        cartona = `${100 - word}`;
    }
    
    $("#demo").text(cartona); 
});

        
        
        


        
        



