$(document).ready(function() {

    event.preventDefault();
    
    var responses = ["Sashay away and slay!", "If Britney can get through 2007, you can get through today.", "You're strong. You're a Kelly Clarkson song. You got this!", "Be savage NOT average!", "You do YOU gurl!"];
    
    $('#submit').click(giveResponse);

    function changeImage() {
        var image = document.getElementById('card-img');
        img.src = "../images/joyeaux_card_blank.png";
    }

    function giveResponse() {
        changeImage();
        var num = Math.floor(Math.random() * responses.length);
        
    }
});