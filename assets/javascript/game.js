// music and sound

var audio = new Audio('assets/javascript/carstartgarage.mp3');
var song = new Audio('assets/javascript/highway.mp3');

$('#rock').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
     song.play();
  } else {
     song.pause();
  }
  $(this).data("clicks", !clicks);
});

// counter for answers

var numCorrect = 0;
var numWrong = 0;


// jquery for dashboard

$('#start').on('click', function() {
	presentGo();
});

function presentGo() {
	document.getElementById("go").style.visibility = "visible";
	audio.play();

};

$('#go').on('click', function() {
	runGame();
});

function runGame() {
	document.getElementById("started").style.visibility = "visible";

	function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            alert("time is up");
            alert("Incorrect: " + numWrong + ", " + "Correct: "+ numCorrect);
            location.reload();
            

        }
    }, 1000);
}

$(function ($) {
    var threeMinutes = 60 * 3,
        display = $('#time');
    startTimer(threeMinutes, display);
});
};

document.getElementById("grade").onclick = function() {
  alert("Incorrect: " + numWrong + ", " + "Correct: " + numCorrect);
  location.reload();
};

$("input[id='c']").change(function(){
   numCorrect++;
});

$("input[id='q']").change(function () {
  numWrong++;
});
