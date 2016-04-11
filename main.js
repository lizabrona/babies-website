var item=0;
var timeout = 500;
var closetimer = 0;
var slideimages = new Array();
var step=0;

function openmenu(id){

	cancelclosetime();
	if(item)
	item.style.visibility = 'hidden';
	item=document.getElementById(id);
	item.style.visibility = 'visible';
}
function mclose()
{
	if(item) item.style.visibility = 'hidden';
}
function closetime(){
	closetimer = window.setTimeout(mclose, timeout);
}
function cancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 
//document.onload=slideimage;
slideimages[0] = new Image(); 
slideimages[0].src = "play1.jpg";
slideimages[1] = new Image();
slideimages[1].src = "play2.jpg";
slideimages[2] = new Image();
slideimages[2].src = "play3.jpg";

function slideimage(){
 var slide = document.getElementById('slide');
 if (slide){
	//debugger;
	slide.src = slideimages[step].src;
	if (step<2)
		step++;
	else
		step=0;
	}
 setTimeout(slideimage,3000);
}

slideimage();