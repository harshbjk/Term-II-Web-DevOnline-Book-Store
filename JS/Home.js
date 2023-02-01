$( document ).ready(function() {
    let username1 = document.cookie;
    document.getElementById("Welcome").innerHTML = "Welcome " + username1;
    $('.slider').bxSlider({

    });
});