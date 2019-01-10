	var random = new Random();

	var size = 150,
		 sensivity = 1,
		 shape = 0,

		 pageX,
		 pageY,
		 startX_onclick,
		 startY_onclick,
		 isDragging,
		 cx;

	function initPage(){

	cx = new canvas( 'canvas' ).context;
	cx_temp = new canvas( 'canvas_temp' ).context;



		for( var i = 1; i < 7; i+=5 )
			cx.drawCircle({
								X: 		i*200,
								Y: 		$('#canvas').height() / 2 ,
								size: 	20,
								color: 	random.rgb(),
								stroke: false,
								clear: false
							});




	$('body').on("keydown", function(e){
			
			console.log( e.keyCode )
		//Switch
		switch( e.keyCode ) {
			//right
			case 37:
				break;
			//left
			case 39:
				break;

			//up
			case 38:

				break;

			//down
			case 40:	
				break;


			//A
			case 65:
					size += sensivity * 10;

				break;

			//Z 
			case 90:
					if( size > 0 )
						size -= sensivity * 10;
					else
						size = 1
				break;
		

			//shift
			case 16:
				sensivity++;
				break;

			//tab
			case 49:
			case 50:
			case 51:
			case 52:
				shape = e.keyCode - 49;
				break;


			//enter
			case 13:
				break;

			//backspace
			case 8:
				break;

			//esc
			case 27:

		}

	});


$(window).mousemove(function(e) {
		pageX = $(window).width() - e.pageX;
		pageY = $(window).height() - parseInt( e.pageY );

		size = ( size > 1 )? (size-1): 1;

		if( isDragging )
			draw(shape);
});


$('canvas').mousedown(function(e) { console.log('jjs');  isDragging = true; if(shape ===  3){ startX_onclick = e.pageX; startY_onclick = e.pageY;  $("#canvas_temp").css({left: 0}); } });
$('canvas').mouseup(function() { isDragging = false; if( shape === 3 ){ drawGuid(); } size= 80; });


}


function draw(shape){


										
		//circle
		if( shape == 0 )
			cx.drawCircle({
							X: 		pageX - ( size / 2 ),
							Y: 		pageY - ( size / 2 ),
							size: 	size,
							color: 	random.rgb(),
							clear: false,
							stroke: true
						});

		//squers
		if( shape == 1 )
			cx.drawRect({
							X: 		pageX - ( size / 2 ),
							Y: 		pageY - ( size / 2 ),
							width: 	size,
							height: 	size,
							color: 	random.rgb(),
							stroke: true,
							clear: false
						});

		// triangle
		if( shape == 2 )
			cx.triangle({
							X: 		pageX,
							Y: 		pageY,
							size: size,
							color: random.rgb(),
							fill: true,
							clear: false
						});


		// First Practice lines
		if( shape == 3 ){

			cx_temp.drawLine( { 
					startX: 	startX_onclick,
					startY: 	startY_onclick,
					endX: 	pageX,
					endY: 	pageY,
					stroke:  true,
					color: random.rgb(),
					width: 	1,
					clear: true
				});

		}
}

function drawGuid( ){

	// cx_temp.clear();

$('#canvas_temp').css({
    left: -1400,
});

	cx.drawLine( { 
		startX: 	startX_onclick,
		startY: 	startY_onclick,
		endX: 	pageX,
		endY: 	pageY,
		stroke:  true,
		color: random.rgb(),
		width: 	1
	});


}

 


