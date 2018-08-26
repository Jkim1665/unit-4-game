var random_result;
var loss = 0;
var win = 0;

var previous = 0; // need to make it a number therefore set it equal to 0

var startGame = function () {

    $(".crystals").empty();   //reset

    random_result = Math.floor(Math.random() * 59) + 30;
    //console.log (random_result);



    $("#result").html('Random Result: ' + random_result);

    for (var i = 0; i < 4; i++) {

        var randomNum = Math.floor(Math.random() * 11) + 1;
        // console.log(randomNum);

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": randomNum  //how to set your own attribute
            });

        crystal.html(randomNum); 
        // cheating to see the numbers

            $(".crystals").append(crystal);
    }
}

startGame ();
//event delegation
$(document).on('click', ".crystal", function () {


    var num = parseInt($(this).attr('data-random'));

    previous += num;

    console.log(previous);

    if (previous > random_result) {
        loss--;
        $("#loss").html(loss);

        previous = 0;

        startGame();

    }
    else if (previous === random_result) {
        win++;

        $("#win").html(win);
        
        previous = 0;

        startGame();
    }

});


// pseudo coding
// a game with 4 crystals and random result
// every crystal needs to have a random number between 1-12
// a new random number s hould be generated every single time we win or loss
// ..to those 4 crystals
//when clicking any crystal, it should be adding with the previous result
//until it equals the random result
// if it is greater than the random result, we decrement a loss counter
// if it is equal, then we increment a win counter 