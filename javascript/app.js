$(document).ready(function() {

    event.preventDefault();
    
    var responses = ["Sashay away and slay!", "If Britney can get through 2007, you can get through today.", "You're strong. You're a Kelly Clarkson song. You got this!", "Be savage NOT average!", "You do YOU gurl!"];
    
    function changeImage() {
        var image = document.getElementById('card-img');
        img.src = "joyeaux_card_blank.png";
            // for loop
            $('img').parent.replace(responses[i]);
    }

    $('#submit').click(changeImage);
});