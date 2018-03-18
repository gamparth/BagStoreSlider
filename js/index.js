

var i = 0 ,counter=0 ,even = 0; 
var path = new Array(); 

// LIST OF IMAGES 
path[0] = "images/1.jpg"; 
path[1] = "images/2.jpg";
path[2] = "images/3.jpg";
path[3] = "images/4.png";


function swapImage() { 
	//document.slide.src = path[i]; 

	$('.slide').attr("src",path[i]);
	if(i < path.length - 1) 
		i++; 
	else 
		i = 0; 

	counter++;

	if(counter%4 == 0 )
	{	
		if( even%2 == 0 )
		{
			$('#ft').css( { "display" : "none" } );
			$('#st').css( { "display" : "block" } );
		}
		else
		{
			$('#st').css( { "display" : "none" } );
			$('#ft').css( { "display" : "block" } );
		}
		even++;

	}

	setTimeout(swapImage,3000); 
} 


window.onload=swapImage; 




