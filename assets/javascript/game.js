

var targetNumber; 
var wins = 0;
var losses = 0;
var counter = 0;

//computer generates random number 19 and 20
//Display random number on screen inside <div class="target-number">

targetNumber = Math.floor(Math.random() * 120) + 19;
$("#number-goal").text(targetNumber);


var crystalNumbers = [
     Math.floor(Math.random()*11) +1,
     Math.floor(Math.random()*11) +1,
     Math.floor(Math.random()*11) +1,
     Math.floor(Math.random()*11) +1,
];
console.log(crystalNumbers);

//Generate 4 random numbers for the crystals
for(var i = 0; i < crystalNumbers.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "#");
    imageCrystal.attr("data-crystalvalue", crystalNumbers[i]);
    $("#crystals").append(imageCrystal);
    
}
 
//when crystal clicked, log random #
$(".crystal-image").on("click", function(){

    var currentNum = parseInt($(this).attr('data-crystalvalue'));
    // console.log(currentNum);

//Add previous # to current #, then show on screen
    counter += currentNum;
    $("h3").text(counter);
    console.log(counter);
    

//checks if user has guessed too high
//if too high, alert lost and increment losses by 1
    if(counter > targetNumber){
        losses++;
        alert("You Lose!");
        $("#losses").text(losses);
        reset();
    }
//If user guesses correct number, alert win, increment wins by 1
    else if (counter === targetNumber) {
        wins++;
        $("#wins").text(wins);
        alert("You Win!")
        reset();
    }

//Reset game after win or loss
function reset() {

targetNumber = Math.floor(Math.random() * 120) + 19;
$("#number-goal").text(targetNumber);


var crystalNumbers = [
     Math.floor(Math.random()*11) +1,
     Math.floor(Math.random()*11) +1,
     Math.floor(Math.random()*11) +1,
     Math.floor(Math.random()*11) +1,
];
console.log(crystalNumbers);

//Generate 4 random numbers for the crystals
for(var i = 0; i < crystalNumbers.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "#");
    imageCrystal.attr("data-crystalvalue", crystalNumbers[i]);
    $("#crystals").append(imageCrystal);
    
}
$(".crystal-image").empty();
}

});