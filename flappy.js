

var bg,output;
var img_player=new Image();
img_player.src='https://sun.sjtu.edu.cn/scores/game/player.png';

var playerWidth,playerHeight;
var x,y,vx,vy,vy0;
var g=0,f=0,f2g=0;
var t;
var c=500;//coefficient between real time and move time

var barrierX=new Array();
var barrierY=new Array();
var colors=new Array();
var barrierH,barrierW;

var clicked = false;
var gamestate=0;
var score=0,highscore=0;
var added=false;

var downtime=0;
function init(){
	
	bg = document.getElementById("background");
	output = document.getElementById('output');
	if(document.body.clientWidth>document.body.clientHeight){
		bg.width=document.body.clientWidth*0.4;
		bg.height=document.body.clientHeight*0.4;
	}
	else{
		bg.width=document.body.clientWidth*0.8;
		bg.height=document.body.clientHeight*0.4;
	}

	playerWidth = 0.05*bg.width;
	playerHeight = playerWidth;
	barrierW = playerWidth*2;
	barrierH = playerHeight*3.2;
	barrierX.length=0;
	barrierY.length=0;
	
	x=bg.width*0.1;
	y=bg.height/2;
	vx=0.4*bg.width;
	g=2*bg.height;
	vy0=-0.2*bg.height;
	vy=vy0;
	f2g=1.7;
	t=0;
	score = 0;
	gamestate=1;
	added=false;
	render();
}
var lasttime = 0;
function gameloop(timestamp){
	
	if (lasttime > 0){
		dt = (timestamp - lasttime)/1000;
	}
	else{
		dt = 0.001;
	}
	
	//game ai
	y+=vy*dt;
	vy+=(g-f)*dt;
	if (y>=bg.height-playerHeight || y<=0){
		gameover();
	}
		
	if(t==0){
		getbarrier();
	}
	else if(t>barrierW*3/vx){
		t=-dt;
	}
	t+=dt;

	for(var i=0;i<barrierX.length;i++){
		barrierX[i]-=vx*dt;
	}
	if(barrierX[0]<=-barrierW){
		barrierX.shift();
		barrierY.shift();
		colors.shift();
	}
	else if(barrierX[0]<=x+playerWidth && barrierX[0]+barrierW>x){
		if(y<barrierY[0]-barrierH || y+playerHeight>barrierY[0])gameover();
		added=true;
	}
	else if(barrierX[0]+barrierW<x){
		if(added){score++;added=false;}
	}
	
	if(gamestate==1){
		output.innerHTML = 'score:'+score+' record:'+highscore;//+' clicked='+clicked;
		window.requestAnimationFrame(gameloop);
		render();
	}
	else{

	}
	lasttime = timestamp;
}
function gameover(){
	if(score<=highscore){
		output.innerHTML = "Sorry, your score:"+score+". Record:"+highscore;
	}
	else {
		if (highscore > 0)alert("You break the record! Excellent!");
		highscore=score;
		output.innerHTML = "You break the record! Score:"+highscore;
	}
	gamestate=0;
}
	
function getbarrier(){
	barrierX.push(bg.width);
	barrierY.push(bg.height*(0.5+0.3*Math.random()));
	colors.push("rgb(" + Math.floor(50+Math.random()*200)+","+ Math.floor(50+Math.random()*200)+","+ Math.floor(50+Math.random()*200) +")");
}
function render(){
	var ctx=bg.getContext('2d');
	ctx.clearRect(0,0,bg.width,bg.height);
	for(var i=0;i<barrierX.length;i++){
		ctx.fillStyle=colors[i];
		ctx.fillRect(barrierX[i],barrierY[i],barrierW,bg.height-barrierY[i]);
		ctx.fillRect(barrierX[i],0,barrierW,barrierY[i]-barrierH);
	}
	ctx.drawImage(img_player,x,y,playerWidth,playerHeight);
}
function btnDown(){
	clicked=true;
	if(gamestate==0){
		init();
		lasttime = 0;
		window.requestAnimationFrame(gameloop);
	}
	else{
		f=f2g*g;
		vy=vy0;
	}
}
function btnUp(){
	clicked=false;
	f=0;
}
//var i=setInterval("gameloop()",dt);
