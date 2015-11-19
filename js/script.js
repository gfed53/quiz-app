$(document).ready(function(){
	var quizApp = {
		numCorrect: 0,
		numOfQuestions: 8,
		currentQ: 0,
		//Questions stored in array
		questions: []
	};

	//Constructor function for questions
	function makeQuestion(title, answers, correct, blurb, background){
		var question = {
			title: title,
			answers: answers,
			correct: correct,
			blurb: blurb,
			background: background
		}

		quizApp.questions.push(question);
		console.log(quizApp.questions);
	};

	/*1*/makeQuestion("Mortal Kombat X", ["Injustice: Gods Among Us", "Resident Evil 5", "Mortal Kombat X", "Dead Space II"], 2, "Mortal Kombat X introduced Jax Briggs daughter as well as Johnny Cage and Sonya Blade’s daughter, but also some non-canonical crossover characters such as the Predator and Jason Voorhees. Toas-ty!", "images/mk.jpg")
	/*2*/makeQuestion("The Wire", ["The Wire", "True Detective", "Homicide", "Law & Order"], 0, "The Wire was a critically acclaimed HBO TV show that focused on the Baltimore drug scene which plagued the city, obviously considered to be a big issue at the time.", "images/the-wire-hd-hbo.png");
	/*3*/makeQuestion("Oldboy", ["The Raid 2", "Lady Vengeance", "Fight Club", "Oldboy"], 3, "‘Laugh, and the whole world laughs around you. Weep, and you weep alone.’ Part of ‘The Vengeance Trilogy’ by Korean director Chan Woo Park, Oldboy is able to stand on its own as a remarkable revenge story that makes the viewer question who the real villain is, if they even exist at all. (For those of you who picked The Raid 2, sorry. I did say 'mystery', though! *trollface*)", "images/Oldboy-movie.jpg");
	/*4*/makeQuestion("Dream Theater", ["Megadeth", "Dream Theater", "Slayer", "Yes"], 1, "Dream Theater, the artist formerly known as Majesty, began their career in the 1980’s and have truly stood the test of time, despite not being a band that you’ll likely hear on the radio anytime soon. (10-20 minute songs aren’t exactly radio-friendly.)", "images/dreamtheater.jpg");
	/*5*/makeQuestion("Chrono Trigger", ["The Legend of Zelda: Majora's Mask", "EarthBound", "Chrono Trigger", "Final Fantasy VI"], 2, "Chrono Trigger. Do I need to say more? If RPG’s are your cup of tea, and you haven’t played this game yet, get on it! Unlike the characters within the game, we don’t have all the time in the world!!", "images/chrono.jpg");
	/*6*/makeQuestion("The Sopranos", ["Breaking Bad", "Dexter", "The Sopranos", "In Treatment"], 2, "The Sopranos was one of HBO’s most, if not THE most, well-known shows of all time. To say that it was influential might not really apply here because not many shows have even dared to fill it’s shoes. That’s not to say that this will forever be the case, though.", "images/sopranos.jpg");
	/*7*/makeQuestion("Mulholland Drive", ["Mulholland Drive", "Vanilla Sky", "Snatch", "The Green Mile"], 0, "Mullholland Drive. Going into any sort of detail could spoil the viewing experience for those who haven’t seen it, but it can be considered the pinnacle of director David Lynch’s eccentric and bizarre cinematic career.", "images/mull.png");
	/*8*/makeQuestion("Alice in Chains", ["Soundgarden", "Alice in Chains", "Nirvana", "Pearl Jam"], 1, "Alice in Chains was founded by lead singer Layne Staley and guitarist/vocalist Jerry Cantrell in 1987. Staley unfortunately suffered from drug addiction, so bad that his decaying body was found after he had isolated himself from pretty much everyone he knew.", "images/alice_in_chains.jpg");
	
	//Detect whether selected choice is correct answer
	var determineCorrect = function(){
		var current = quizApp.questions[quizApp.currentQ];
		console.log(current);
		var c = current.correct;
		console.log(c);
		console.log($('.game-question label')[c]);
		if ($('.active span').html() === current.answers[c]){
			console.log("You are correct");
			$('.answer-text h1').html("Correct!");
			quizApp.numCorrect += 1;
			$('.num-correct').html(quizApp.numCorrect);
		} else {
			console.log("Wrong.");
			$('.answer-text h1').html("Wrong");
		};
		$('.answer-text p').html(current.blurb);
		$('body').css("background", "url("+current.background+") no-repeat center center");
		$('body').css("background-size", "cover");
	};

	var clearRoundData = function(){
		//Clear active states
		$('.btn-primary').removeClass('active');
		quizApp.numAsked += 1;
		$('.num-asked').html(quizApp.numAsked);
		quizApp.currentQ += 1;
	};
	$('.game-start').show();

	//Toggle buttons go to active when clicked
	$('.btn-primary').on('click', function(){
		$(this).button('toggle');
	});

	//To go from start-game to question 1
	$('.start-game').on('click', function(){
		$('.game-start').hide();
		$('.question-1-section').show();
		$('body').css("height", "66em");
	});

	//Feedback(for question 1)
	$('#select-answer-1').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-1').show();
		$('body').css("height", "53em");
		$('footer').css("background-color", "rgba(51, 51, 51, 0.68)")
		clearRoundData();
	});

	//To question 2
	$('#to-question-2').on('click', function(){
		$('.game-answer-1').hide();
		$('body').css("background", "linear-gradient(45deg, rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%)");
		$('.question-2-section').show();
		$('body').css("height", "66em");
		$('footer').css("background-color", "transparent");
		$('#masthead').show();
	});

	//Feedback(for question 2)
	$('#select-answer-2').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-2').show();
		$('body').css("height", "53em");
		$('footer').css("background-color", "rgba(51, 51, 51, 0.68)")
		clearRoundData();
	});

	//to question 3 
	$('#to-question-3').on('click', function(){
		$('.game-answer-2').hide();
		$('body').css("background", "linear-gradient(45deg, rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%)");
		$('.question-3-section').show();
		$('body').css("height", "66em");
		$('footer').css("background-color", "transparent");
		$('#masthead').show();
	});

	//Feedback(for question 3)
	$('#select-answer-3').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-3').show();
		$('body').css("height", "53em");
		$('footer').css("background-color", "rgba(51, 51, 51, 0.68)")
		clearRoundData();
	});

	//to question 4 
	$('#to-question-4').on('click', function(){
		$('.game-answer-3').hide();
		$('body').css("background", "linear-gradient(45deg, rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%)");
		$('body').css("background", "linear-gradient(45deg, rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%)");
		$('.question-4-section').show();
		$('body').css("height", "66em");
		$('footer').css("background-color", "transparent");
		$('#masthead').show();
	});

	//Feedback(for question 4)
	$('#select-answer-4').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-4').show();
		$('body').css("height", "53em");
		$('footer').css("background-color", "rgba(51, 51, 51, 0.68)")
		clearRoundData();
	});

	//to question 5
	$('#to-question-5').on('click', function(){
		$('.game-answer').hide();
		$('body').css("background", "linear-gradient(45deg, rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%)");
		$('body').css("background", "linear-gradient(45deg, rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%)");
		$('.question-5-section').show();
		$('body').css("height", "66em");
		$('footer').css("background-color", "transparent");
		$('#masthead').show();
	});

	//Feedback(for question 5)
	$('#select-answer-5').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-5').show();
		$('body').css("height", "53em");
		$('footer').css("background-color", "rgba(51, 51, 51, 0.68)")
		clearRoundData();
	});

	//to question 6 
	$('#to-question-6').on('click', function(){
		$('.game-answer').hide();
		$('body').css("background", "linear-gradient(45deg, rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%)");
		$('.question-6-section').show();
		$('body').css("height", "66em");
		$('footer').css("background-color", "transparent");
		$('#masthead').show();
	});

	//Feedback(for question 6)
	$('#select-answer-6').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-6').show();
		$('body').css("height", "53em");
		$('footer').css("background-color", "rgba(51, 51, 51, 0.68)")
		clearRoundData();
	});

	//to question 7 
	$('#to-question-7').on('click', function(){
		$('.game-answer').hide();
		$('body').css("background", "linear-gradient(45deg, rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%)");
		$('.question-7-section').show();
		$('body').css("height", "66em");
		$('footer').css("background-color", "transparent");
		$('#masthead').show();
	});

	//Feedback(for question 7)
	$('#select-answer-7').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-7').show();
		$('body').css("height", "53em");
		$('footer').css("background-color", "rgba(51, 51, 51, 0.68)")
		clearRoundData();
	});

	//to question 8 
	$('#to-question-8').on('click', function(){
		$('.game-answer').hide();
		$('body').css("background", "linear-gradient(45deg, rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%)");
		$('.question-8-section').show();
		$('body').css("height", "66em");
		$('footer').css("background-color", "transparent");
		$('#masthead').show();
	});

	//Feedback(for question 8)
	$('#select-answer-8').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-8').show();
		$('body').css("height", "53em");
		$('footer').css("background-color", "rgba(51, 51, 51, 0.68)")
		clearRoundData();
	});

	//Ending page
	$('#to-game-end').on('click', function(){
		$('.game-answer').hide();
		$('body').css("background", "linear-gradient(45deg, rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%)");
		$('footer').css("background-color", "transparent");
		$('#score-footer').hide();
		$('.game-end').show();
	});

});