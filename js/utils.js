
Math.prototype=Math;

Math.prototype.randRange=function(min,max){
  return Math.floor(( Math.random() * (max-min+1))+min)
}

Number.prototype.map = function ( in_min , in_max , out_min , out_max ) {
  return Math.floor( ( this - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min );
}

Number.prototype.toGray = function () {
	return "rgba(" + this + ", " + this + ", " + this + ", " + 1 + ")";
}


var brushs = ['rect', 'circle', 'line', 'triangle'];

var Random = function() {

	this.rgb = function(){
			var _R = Math.randRange( 0, 255 ),
				 _G = Math.randRange( 0, 255 ),
				 _B = Math.randRange( 0, 255 ),
				 _A = 1;

				return "rgba(" + _R + ", " + _G + ", " + _B + ", " + _A + ")";
		}

	this.gray = function(){
			var _G = Math.randRange( 0, 255 ),
				 _A = 1;
				return "rgba(" + _G + ", " + _G + ", " + _G + ", " + _A + ")";
	}

	this.gradient = function(x,y,size,ctx){

			var my_gradient=ctx.createLinearGradient(x,y,x+size, y+size,0);
			my_gradient.addColorStop(0,"black");
			my_gradient.addColorStop(0.1,"red");
			my_gradient.addColorStop(0,"white");

			return my_gradient;
	}

}


var color = {
		val: '',
		random: function(){

			var _R = Math.randRange( 0, 255 ),
				_G = Math.randRange( 0, 255 ),
				_B = Math.randRange( 0, 255 ),
				_A = Math.random();
				return "rgba(" + _R + ", " + _G + ", " + _B + ", " + _A + ")";
		}
}





Object.prototype.setToDefaults = function( mode ){

				var _normal = defaults[ mode ];
				for( var x in _normal )
					if ( this.hasOwnProperty( x ) )
						_normal[ x ] = this[ x ];

				return _normal;
}



function canvas( id ){

	this.id = id;
	defaults = {

		line:  { 
						startX: 	0, 
						startY: 	0,
						endX: 	100,
						endY: 	100,
						color: 	'rgba(255, 255, 255, 1)',
						width: 	1,
						stroke: true,
						fill: true,
						clear: true,
					},

		rect:  { 
					X: 	0, 
					Y: 	0,
					width: 	100,
					height: 	100,
					color: 	'rgba(255, 255, 255, 1)',
					stroke: true,
					fill: true,
					clear: true,					
				},

		circle:{
					X: 0,
					Y: 0,
					size: 100,
					color: 'rgba(255, 255, 255, 1)',
					stroke: true,
					fill: true,
					clear: true
				},

		triangle:{

					X: 0,
					Y: 0,
					size: 100,
					color: 'rgba(255, 255, 255, 1)',
					stroke: true,
					fill: true,
					clear: true
		}

	}


	this.create = function(){ return document.getElementById( this.id ).getContext('2d') };
	this.context = this.create();


	this.context.drawLine = function( options ){ 
										var _op = options.setToDefaults( 'line' );

										if( _op.clear ) this.clear();

										// this.lineWidth = _op.width;
									   this.beginPath();	
										this.moveTo( _op.startX, _op.startY );
										this.lineTo( _op.endX, _op.endY );

										if( _op.stroke ) this.stroke();

									};

	this.context.drawRect = function( options ){ 
										var _op = options.setToDefaults( 'rect' );

										if( _op.clear ) this.clear();




        								this.beginPath();
										this.fillStyle = _op.color;
										this.fillRect( _op.X ,_op.Y, _op.width , _op.height );

										if( _op.stroke ) this.stroke();

							};



	this.context.drawCircle = function( options ){ 

										var _op = options.setToDefaults( 'circle' );

										if( _op.clear ) this.clear();

        								this.beginPath();
										this.fillStyle = _op.color;

										this.arc( _op.X ,_op.Y, _op.size, 0 ,2*Math.PI );

										if( _op.fill ) 	this.fill()
										if( _op.stroke ) 	this.stroke();
							};



	this.context.triangle = function( options ){ 

										var _op = options.setToDefaults( 'triangle' );

										if( _op.clear ) this.clear();

										this.fillStyle = _op.color;
										this.beginPath();
										this.moveTo(_op.X,_op.Y);
										this.lineTo( _op.X - _op.size , _op.Y + _op.size );
										this.lineTo( _op.X + _op.size , _op.Y + _op.size );
										this.closePath();

										if( _op.fill ) 	this.fill()
										if( _op.stroke ) this.stroke();

							};

 this.context.clear = function(){
 		this.clearRect(0, 0, 1000, 700);
 }




}







/**** COMMENTS OUT *******************************************/

// CanvasRenderingContext2D.prototype.line = function( x_1, y_1, x_2, y_2, color ) { 
// 		this.strokeStyle = color;
// 		this.moveTo(x_1, y_1 );
// 		this.lineTo( x_2, y_2 );
// 		this.stroke();
// }



