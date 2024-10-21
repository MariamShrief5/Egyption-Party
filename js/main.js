/* Left Menu Aside */
let leftMenuWidth = $('.leftMenu').outerWidth();
$('.leftMenu').animate({marginLeft: -leftMenuWidth}, 0);
$('.homeContact, .slider-aside').animate({marginLeft: 0}, 0);

// Show left menu and move other sections to the right when slider-aside is clicked
$('.slider-aside').on('click', function () {
    $('.homeContact, .slider-aside').animate({marginLeft: leftMenuWidth}, 500);
    $('.leftMenu').animate({marginLeft: 0}, 500);
});

// Hide left menu and move other sections back to their original position when close button is clicked
$('#btnClose').on('click', function () {
    $('.homeContact, .slider-aside').animate({marginLeft: 0}, 500);
    $('.leftMenu').animate({marginLeft: -leftMenuWidth}, 500);
});

/* Accordion */
$('.innerFirst').css('display', 'block'); 
$('.sliderDown .toggle').on('click', function (e) {
    // Slide up all other inner elements except the one clicked
    $('.inner').not($(this).next()).slideUp(500);
    // Toggle the display of the clicked inner element
    $(e.target).next().slideToggle(500);
});

// Scroll Behavior

// Scroll to top when scroll button is clicked
$('.scrollbtn').on('click', function () {
    $('html,body').animate({scrollTop: 0}, 750);
});

// Show or hide the scroll button based on scroll position
$(window).on('scroll', function () {
    if (Number($(window).scrollTop()) > 750) {
        $('.scrollbtn').css('display', 'flex');
    }
    if (Number($(window).scrollTop()) < 750) {
        $('.scrollbtn').css('display', 'none').fadeOut(500);
    }
});

// Smooth scroll to section when a link in the left menu is clicked
$(".leftMenu a").on('click', function (e) {
    var sectionId = $(e.target).attr('href');
    var positionOfSection = $(sectionId).offset().top;
    $('html, body').animate({scrollTop: positionOfSection}, 2000);
});

// Countdown
window.onload = function() {
    countDownToTime("25 December 2024 9:56:00"); 
}

function countDownToTime(countTo) {
    let futureDate = new Date(countTo).getTime() / 1000; 
    let now = new Date().getTime() / 1000; 
    let timeDifference = futureDate - now; 

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * 24 * 60 * 60)) / 3600);
    let mins = Math.floor((timeDifference - (days * 24 * 60 * 60) - (hours * 3600)) / 60);
    let secs = Math.floor(timeDifference - (days * 24 * 60 * 60) - (hours * 3600) - (mins * 60));

    // Update countdown display
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`);

    setInterval(function() {
        countDownToTime(countTo);
    }, 1000); 
}

// Contact
$('textarea').keydown(function (e) {
    let lengths = this.value; 
    console.log(lengths.length);

    if (lengths.length < 100) {
        $('#remchar').html(`${100 - lengths.length}`);
    }
    if (lengths.length > 100) {
        $('#remchar').html(`Your available characters finished 0`);
    }
});