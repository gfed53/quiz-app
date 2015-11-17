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

	makeQuestion('First Answer', ['correct answer', 'wrong', 'wrong again', 'wrong wrong wrong'], 0, "This is a blurb about answer 1");
	makeQuestion('Second Answer', ['wrong', 'wrong', 'correct answer 2', 'wrong wrong wrong'], 2, "This is a blurb about answer 2");
	makeQuestion('Third Answer', ['wrong', 'correct', 'wrong', 'wrong'], 1, 'Blurb about the third');
	

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
		console.log(questionsList.length-1);
		if(records.currentQ === (questionsList.length)){
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

	//Question 
	$('#to-question-3').on('click', function(){
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
		// checkEnd();
	});

	// $('#content .game-question').forEach(function(q))

	// quizApp.questions.forEach(function(q)


	//How we might make a loop

		// var q = quizApp.currentQ;
		// $('btn-question')[q].on('click', function(){
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
// if ($('.game-question label')[c].hasClass('active')){
// 	console.log("Right");
// }


	// });