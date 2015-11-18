$(document).ready(function(){
	var quizApp = {
		numCorrect: 0,
		numOfQuestions: 8,
		currentQ: 0,
		//Questions stored in array
		questions: []
	};

	//Constructor function for questions
	function makeQuestion(title, answers, correct, blurb){
		var question = {
			title: title,
			answers: answers,
			correct: correct,
			blurb: blurb
			// this.category = category;
		}

		quizApp.questions.push(question);
		console.log(quizApp.questions);
		// console.log($('#question-1')[0]);
	};

	/*1*/makeQuestion("Mortal Kombat X", ["Injustice: Gods Among Us", "Resident Evil 5", "Mortal Kombat X", "Dead Space II"], 2, "Mortal Kombat X introduced Jax Briggs daughter as well as Johnny Cage and Sonya Blade’s daughter, but also some non-canonical crossover characters such as the Predator and Jason Voorhees. Toas-ty!")
	/*2*/makeQuestion("The Wire", ["The Wire", "True Detective", "Homicide", "Law & Order"], 0, "The Wire was a critically acclaimed HBO TV show that focused on the Baltimore drug scene which plagued the city, obviously considered to be a big issue at the time.");
	/*3*/makeQuestion("Oldboy", ["The Raid 2", "Lady Vengence", "Fight Club", "Oldboy"], 3, "‘Laugh, and the whole world laughs around you. Weep, and you weep alone.’ Part of ‘The Vengence Trilogy’ by Korean director Chan Woo Park, Oldboy is able to stand on its own as a remarkable revenge story that makes the view question who the real villain is, if they even exist at all. (For those of you who picked The Raid 2, sorry. I did say 'mystery', though! *trollface*)");
	/*4*/makeQuestion("Dream Theater", ["Megadeth", "Dream Theater", "Slayer", "Yes"], 1, "Dream Theater, the artist formerly known as Majesty, began their career in the 1980’s and have truly stood the test of time, despite not being a band that you’ll likely hear on the radio anytime soon. (10-20 minute songs aren’t exactly radio-friendly.)");
	/*5*/makeQuestion("Chrono Trigger", ["The Legend of Zelda: Majora's Mask", "EarthBound", "Chrono Trigger", "Final Fantasy VI"], 2, "Chrono Trigger. Do I need to say more? If RPG’s are your cup of tea, and you haven’t played this game yet, get on it! Unlike the characters within the game, we don’t have all the time in the world!!");
	/*6*/makeQuestion("The Sopranos", ["Breaking Bad", "Dexter", "The Sopranos", "In Treatment"], 2, "The Sopranos was one of HBO’s most, if not THE most, well-known shows of all time. To say that it was influential might not really apply here because not many shows have even dared to fill it’s shoes. That’s not to say that this will forever be the case, though.");
	/*7*/makeQuestion("Mulholland Drive", ["Mulholland Drive", "Vanilla Sky", "Snatch", "The Green Mile"], 0, "Mullholland Drive. Going into any sort of detail could spoil the viewing experience for those who haven’t seen it, but it can be considered the pinnacle of director David Lynch’s eccentric and bizarre cinematic career.");
	/*8*/makeQuestion("Alice in Chains", ["Soundgarden", "Alice in Chains", "Nirvana", "Pearl Jam"], 1, "Alice in Chains was founded by lead singer Layne Staley and guitarist/vocalist Jerry Cantrell in 1987. Staley unfortunately suffered from drug addiction, so bad that his decaying body was found after he had isolated himself from pretty much everyone he knew.");

	//Implant the questions 
	var questionInject = function(){
		console.log($('.game-question label')[0]);
		console.log($('#content .game-question')[2]);
		// quizApp.questions.forEach(function(q){
		// 	console.log("Object");

			// if (q[0]) {
			// 	$('.question-1').show();
			// } else if (q[1])
			// if ($('active') === question.correct){
				
					
			// 	};
			// }
		// });
	};

	questionInject();

	//Detect whether selected choice is correct answer
	var determineCorrect = function(){
		var current = quizApp.questions[quizApp.currentQ];
		console.log(current);
		var c = current.correct;
		console.log(c);
		console.log($('.game-question label')[c]);
		// if ($('.game-question label')[c].hasClass('active')){
		// 	console.log("Right");
		// }
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

		// console.log("Running determineCorrect");
		// var rightChoice = questionsList[records.currentQ];
		// console.log(rightChoice);
		// console.log(rightChoice.answer);
		// console.log($('.game-question.active span').html());
		// if($('.game-question .active span').html() === rightChoice.answer){
		// 	console.log("This should happen");
		// 	$('.answer-text h1').html(rightChoice.answer + " is correct!");
		// 	records.numCorrect += 1;
		// 	$('.num-correct').html(records.numCorrect);
		// } else {
		// 	$('.answer-text h1').html("Sorry, the answer is " + rightChoice.answer + ".");
		// }
		// $('.answer-text p').html(rightChoice.blurb);
	};

	var clearRoundData = function(){
		//Clear active states
		$('.btn-primary').removeClass('active');
		//Or?
		// $('.btn-primary').button('reset');
		//Update score, question number, and question itself (make function?)
		quizApp.numAsked += 1;
		$('.num-asked').html(quizApp.numAsked);
		quizApp.currentQ += 1;
	};

	//Check if all questions are asked. Goes in click function of select-answer?
	var checkEnd = function(){
		console.log(quizApp.currentQ);
		if(quizApp.currentQ === quizApp.questions.length){
			console.log("This is the end");
		}
	};

	$('.game-start').show();

	//Toggle buttons go to active when clicked
	$('.btn-primary').on('click', function(){
		$(this).button('toggle');
	});

	//To go from start-game to question 1
	$('#to-start-game').on('click', function(){
		$('.game-start').hide();
		$('.question-1-section').show();
	});

	//Feedback(for question 1)
	$('#select-answer-1').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-1').show();
		clearRoundData();
		// checkEnd();
	});

	//To question 2
	$('#to-question-2').on('click', function(){
		$('.game-answer-1').hide();
		$('.question-2-section').show();
		$('#masthead').show();
	});

	//Feedback(for question 2)
	$('#select-answer-2').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-2').show();
		clearRoundData();
		// checkEnd();
	});

	//to question 3 
	$('#to-question-3').on('click', function(){
		// checkEnd();
		$('.game-answer-2').hide();
		$('.question-3-section').show();
		$('#masthead').show();
	});

	//Feedback(for question 3)
	$('#select-answer-3').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-3').show();
		clearRoundData();
	});

	//to question 4 
	$('#to-question-4').on('click', function(){
		// checkEnd();
		$('.game-answer-3').hide();
		$('.question-4-section').show();
		$('#masthead').show();
	});

	//Feedback(for question 4)
	$('#select-answer-4').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-4').show();
		clearRoundData();
	});

	//to question 5
	$('#to-question-5').on('click', function(){
		// checkEnd();
		$('.game-answer').hide();
		$('.question-5-section').show();
		$('#masthead').show();
	});

	//Feedback(for question 5)
	$('#select-answer-5').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-5').show();
		clearRoundData();
	});

	//to question 6 
	$('#to-question-6').on('click', function(){
		// checkEnd();
		$('.game-answer').hide();
		$('.question-6-section').show();
		$('#masthead').show();
	});

	//Feedback(for question 6)
	$('#select-answer-6').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-6').show();
		clearRoundData();
	});

	//to question 7 
	$('#to-question-7').on('click', function(){
		// checkEnd();
		$('.game-answer').hide();
		$('.question-7-section').show();
		$('#masthead').show();
	});

	//Feedback(for question 7)
	$('#select-answer-7').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-7').show();
		clearRoundData();
	});

	//to question 8 
	$('#to-question-8').on('click', function(){
		// checkEnd();
		$('.game-answer').hide();
		$('.question-8-section').show();
		$('#masthead').show();
	});

	//Feedback(for question 8)
	$('#select-answer-8').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer-8').show();
		clearRoundData();
	});

	$('#to-game-end').on('click', function(){
		$('.game-answer').hide();
		$('.game-end').show();
	})

	// $('#content .game-question').forEach(function(q))

	// quizApp.questions.forEach(function(q)


	//How we might make a loop

		// var q = quizApp.currentQ;
		// $('.btn-question')[q].on('click', function(){
		// 	$('.game-answer')[q].hide();
		// 	$('.game-question')[q+1].show();
		// 	$('#masthead').show();
		// });

		// //Feedback
		// $('.btn-answer')[q].on('click', function(){
		// 	determineCorrect();
		// 	//Shift phase
		// 	$('.game-question').hide();
		// 	$('#masthead').hide();
		// 	$('.game-answer')[q+1].show();
		// 	clearRoundData();
		// 	// checkEnd();
		// });
		

	//To go from choose-cat to game-question
	// $('.btn-select-cat').on('click', function(){
	// 	//Shift phase
	// 	$('.game-choose-cat').hide();
	// 	$('.game-answer').hide();
	// 	$('.game-question').show();
	// 	$('#masthead').show();
	// 	questionInject();
		
	// });

	

});




// $('.btn').on('click', function(){
	// 	if($('.btn').hasClass('active')){
	// 	} else{
	// 		$(this).toggleClass('active');
	// 	}
// var current = quizApp.questions[quizApp.currentQ];
// console.log(current);
// var c = current.correct;
// if ($('.active')){
// 	console.log("Right");
// }


	// });