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

// questions
var questions = [
	{
		question: "When was the first Ford Mustang released?",
		answer: ["1962","1970", "1964", "1969"],
		correctAnswer: "1964"
	},
	{
		question: "Which classic car holds the world record for the most miles ever driven on one engine?",
		answer: ["1966 Volvo P1800","1990 Honda Accord", "1996 Dodge 2500", "1989 Saab SPG"],
		correctAnswer: "1966 Volvo P1800"

	},
	{
		question: "Who manufactured this car?",
		answer: ["Chrysler", "Ford", "Pontiac", "Dodge"],
		correctAnswer: "Dodge"
	},
	{
		question: "What year was the legendary 426 Hemi released?",
		answer: ["1966", "1954", "1971", "1964"],
		correctAnswer: "1964"
	},
	{
		question: "Which car has more stock horsepower?",
		answer: ["1972 Corvette", "1971 Challenger V8", "1971 Firebird", "1971 Mercedes 280SE"],
		correctAnswer: "1971 Challenger V8"
	}
];

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
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 3,
        display = $('#time');
    startTimer(fiveMinutes, display);
});
};
