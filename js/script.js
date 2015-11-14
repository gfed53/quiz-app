$(document).ready(function(){
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
	// $('.btn').on('click', function(){
	// 	if($('.btn').hasClass('active')){
	// 	} else{
	// 		$(this).toggleClass('active');
	// 	}
	// });


	//To go from choose-cat to game-question
	$('.btn-select-cat').on('click', function(){
		$('.game-choose-cat').hide();
		$('.game-question').show();
	});


});