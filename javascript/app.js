$(document).ready(function() {

    
    var responses = ["Sashay away and slay!", "If Britney can get through 2007, you can get through today.", "You're strong. You're a Kelly Clarkson song. You got this!", "Be savage NOT average!", "You do YOU gurl!"];
    
    

    function changeImage() {
        event.preventDefault();
        $('#decorated').attr('src', '../images/joyeaux_card_blank.png');
            var random = Math.floor(Math.random() * 5);
        
            // for loop
            // $('img').parent.replace(responses[i]);
    }

    $('#submit').click(changeImage);
});