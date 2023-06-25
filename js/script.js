// script.js

$(function() {
     
    $("button").click(function() {
        $('#box').fadeOut(1000);
    });
    
    /* -----------------
       jQUERY SELECTORS
       ----------------- */
    
    // Grouping selector
    // $('h2,h3,h4').css('border','solid 1px red');
    
    // ID selector
    // $('div#container').css('border','solid 1px red');
    
    // Class selector
    // $('p.lead').css('border','solid 1px red');
    
    // Pseudo-element selector - selects first element
    // $('li:first').css('border','solid 1px red');
    
    // Pseudo-element selector - selects even P tags
    // $('p:even').css('border','solid 1px red');
    
    // Descendant selector
    // $('div em').css('border','solid 1px red');
    
    // Child selector
    // $('div > p').css('border','solid 1px red');
    
    // jQuery Header selector
    // $(':header').css('border','solid 1px red');
    
    // jQuery Contains selector
    // $('div:contains("Brad")').css('border','solid 1px red');
    
    /* --------------------
       jQUERY EVENT METHODS
       -------------------- */
    
    $('#box').click(function() {
        alert('you just clicked the box');
    });
    
    $("input").blur(function() {
        
        if( $(this).val() == "" ) {
            $(this).css('border','solid 1px red');
            $('#box').text('Forgot to add text?');
        }
        
    });
    
    $("input").keydown(function() {
        
        if( $(this).val() !== "" ) {
            $(this).css('border','solid 1px #777');
            $('#box').text('Thanks for that!');
        }
        
    });
    
    $('#box').hover(function() {
        
        $(this).text('you hovered in!');
        
    }, function() {
        
        $(this).text('you hovered out!');
        
    });

    //click the go button
    $('#go').click(function(){


        //build a function that checks to see if a car won the race

        function checkIfComplete (){

            if (isComplete== false){

                isComplete=true;
            } else {
                place='second';
            }
        }
        // get the width of cars

        var carwidth= $('#car1').width();

        // get the width of racetrack

        var racewidth= $(window).width()-carwidth;

        //generate random number

        var raceTime1= Math.floor( (Math.random()* 5000) + 1 );

        var raceTime2= Math.floor( (Math.random()* 5000) + 1 );

        //set a flag variable to false

        var isComplete = false;

        // a flag variable to first

        var place = 'first';

        //animate car
        $('#car1').animate({

            //move the car width of the racetrack
            left:racewidth 

        }, raceTime1, function(){

            //animation is complete

            //run a fuction 
checkIfComplete();

//give some text in the race info box
$('#raceInfo1 span').text('Finished in '+ place + 'place and clocked in at '+ raceTime1+' milliseconds!');
        });

        //animate car
        $('#car2').animate({

            //move the car width of the racetrack
            left:racewidth 

        }, raceTime2, function(){

            //animation is complete

            //run a fuction 
checkIfComplete();

//give some text in the race info box
$('#raceInfo2 span').text('Finished in '+ place + 'place and clocked in at '+ raceTime2+' milliseconds!');
        });
    });

    

});
//reset
$('#reset').click(function(){
    $('.car').css('left','0');
    $('.raceInfo span').text('');
        });
