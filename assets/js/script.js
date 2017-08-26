var goal, blue, green, yellow, red, wins= 0, losses = 0, score = 0;


//this function will generate random values
var random = function(){
	goal = Math.floor(Math.random() * (100)) + 19;
	blue = Math.floor(Math.random() * (10)) + 1;
	green = Math.floor(Math.random() * (10)) + 1;
	yellow = Math.floor(Math.random() * (10)) + 1;
	red = Math.floor(Math.random() * (10)) + 1;
	$("#blue").attr("value", blue);
	$("#green").attr("value", green);
	$("#yellow").attr("value", yellow);
	$("#red").attr("value", red);
};

//this functin will return the values of wins, losses and the score to 0
var init = function(){
	score = 0;
	$("#wins").text(wins);
	$("#losses").text(losses);
	$("#target").text(goal);
};


//the click function
$(".crystals img").on("click", function(){
	$("#score").text(score);
	$("#msg").text("");
	var crystalsValue = $(this).attr("value");
	score += parseInt(crystalsValue);
	
	console.log(blue, green, yellow, red, goal);

	
	$("#score").text(score);
	$("#wins").text(wins);
	$("#losses").text(losses);
	
	if (score == goal) {
//      alert("You win!");
		$("#msg").text("You Won!!");
		wins++;
		random();
		init();
    }
    else if (score >= goal) {
//       alert("You lose!!");
		$("#msg").text("You lost!!");
		losses++
		random();
		init();
    };
	
});

random();
init();