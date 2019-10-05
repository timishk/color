
var numSquares=6;
var colors=generateColors(numSquares);
var squares=document.querySelectorAll(".square");
var discol=document.getElementById("cd");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modes=document.querySelectorAll(".mode");
var pc=pickColor();
discol.textContent=pc;

for(var i=0;i<modes.length;i++)
{
	modes[i].addEventListener("click",function(){
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="easy")
		{
			numSquares=3;
		}
		else
			{numSquares=6;}
		reset();
	})
}



resetButton.addEventListener("click",function(){
	 reset();	
})

for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	
	squares[i].addEventListener("click",function(){
var clickedColor=this.style.background;
console.log(clickedColor);
if(clickedColor==pc)
{
	messageDisplay.textContent="correct";
	resetButton.textContent="play again?";
	h1.style.background=pc;
changeColors(pc);

}
else
{
	this.style.background="#232323";
	messageDisplay.textContent="try again";
}})

}

function changeColors(color)
{squares=document.querySelectorAll(".square");
	for(var i=0;i<color.length;i++)
	{
		squares[i].style.background=color;
	}
}

function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
arr.push(randomColors());
	}
	return arr;
}

function randomColors()
{
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
return "rgb(" + r +", " + g +", " + b + ")";
}

function reset()
{
	colors=generateColors(numSquares);
	pc=pickColor();
	cd.textContent=pc;
	resetButton.textContent="new colors";
	messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.background=colors[i];

		}
		else
		{
			squares[i].style.display="none";
		}
	}h1.style.background="steelblue";
}