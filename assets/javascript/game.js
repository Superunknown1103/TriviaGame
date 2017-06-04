var audio = new Audio('assets/javascript/carstartgarage.mp3');
var song = new Audio('assets/javascript/highway.mp3');
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

	}
];


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
};

$('#rock').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
     song.play();
  } else {
     song.pause();
  }
  $(this).data("clicks", !clicks);
});