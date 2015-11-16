$(document).ready(function(){
	var quizApp = {
		numCorrect: 0,
		numOfQuestions: 8,
		// currentQ: 0,
		//Questions stored in array
		questions: []
	};

	//Constructor function for questions
	function makeQuestion(title, answers, correct){
		var question = {
			title = title;
			answers = answers;
			correct = correct
			// this.category = category;
		}
		quizApp.questions.push(question);
		console.log(quizApp.questionsList);
		console.log($('.question-1')[0];
	};

	makeQuestion('First Answer', ['correct answer', 'wrong', 'wrong again', 'wrong wrong wrong'], 0);
	makeQuestion('Second Answer', ['wrong', 'wrong', 'correct answer 2', 'wrong wrong wrong'], 2);

	

	//Implant the questions 
	// var questionInject = function(){
	// 	quizApp.questions.forEach(function(q){

	// 		console.log("Object");
	// 		if ($('.btn-group:nth-child')('active') === question.correct){
				
					
	// 			};
	// 		}
	// 	});
	// };

	//Detect whether selected choice is correct answer
	var determineCorrect = function(){
		console.log("Running determineCorrect");
		var rightChoice = questionsList[records.currentQ];
		console.log(rightChoice);
		console.log(rightChoice.answer);
		console.log($('.game-question.active span').html());
		if($('.game-question .active span').html() === rightChoice.answer){
			console.log("This should happen");
			$('.answer-text h1').html(rightChoice.answer + " is correct!");
			records.numCorrect += 1;
			$('.num-correct').html(records.numCorrect);
		} else {
			$('.answer-text h1').html("Sorry, the answer is " + rightChoice.answer + ".");
		}
		$('.answer-text p').html(rightChoice.blurb);
	};

	var clearRoundData = function(){
		//Clear active states
		$('.btn-primary').removeClass('active');
		//Or?
		// $('.btn-primary').button('reset');
		//Update score, question number, and question itself (make function?)
		records.numAsked += 1;
		$('.num-asked').html(records.numAsked);
		records.currentQ += 1;
	};

	//Check if all questions are asked. Goes in click function of select-answer?
	var checkEnd = function(){
		console.log(records.currentQ);
		console.log(questionsList.length-1);
		if(records.currentQ === (questionsList.length)){
			console.log("This is the end");
		}
	};

	$('.game-start').show();

	//To go from start-game to choose-cat
	$('.btn-start-game').on('click', function(){
		$('.game-start').hide();
		$('.game-choose-cat').show();
	});

	//Toggle buttons go to active when clicked
	$('.btn-primary').on('click', function(){
		$(this).button('toggle');
	});

	//To go from choose-cat to game-question
	$('.btn-select-cat').on('click', function(){
		//Shift phase
		$('.game-choose-cat').hide();
		$('.game-answer').hide();
		$('.game-question').show();
		$('#masthead').show();
		questionInject();
		
	});

	//Feedback
	$('.btn-select-answer').on('click', function(){
		determineCorrect();
		//Shift phase
		$('.game-question').hide();
		$('#masthead').hide();
		$('.game-answer').show();
		clearRoundData();
		checkEnd();
	});

});




// $('.btn').on('click', function(){
	// 	if($('.btn').hasClass('active')){
	// 	} else{
	// 		$(this).toggleClass('active');
	// 	}
	// });