


var cards=["0",'1','2','3','4','5','6'];

var current=null;

var count=0;

var runtimeout=30;

function shuffle(array){

	var currentIndex=array.length,temporaryValue,randomIndex;



	while(currentIndex!==0){
		randomIndex=Math.floor(Math.random() * currentIndex);

		currentIndex-=1;

		temporaryValue=array[currentIndex];
		array[currentIndex]=array[randomIndex];
		array[randomIndex]=temporaryValue;
	}

	return array;

}

function flip(card){
	$(card).toggleClass('flipped');
		$(card).click(function(){
			$(this)=null;
	});
	if(current==null){
	//$(this).toggleClass('flipped');

 $(card).toggleClass('flipped');
	if(!current)
		current=$(card);
	}	


	else{
		if(current.attr("dataname")!=$(card).attr("dataname")){
			setTimeout(function(){
				current.toggleClass("flipped");
				$(card).toggleClass("flipped");
				current.toggleClass('flipped');
				$(card).toggleClass('flipped');
				current=null;
			},500);

		}
		else{
			setTimeout(function(){
				$(card).css('opacity','0');
				current.css('opacity','0');
				current=null;
				count++;
				if(count==8)alert("You Are Win!!!");
			},200);

		}
	}
}

$(function(){
	cards=shuffle(cards);
	cards=cards.concat(cards);
	var html='';

	for(var i=0;i<cards.length;i++){
		html+='<div class="grid">'+
		'<div class="card" dataname= "'+cards[i]+'"onclick="flip(this)">'+
		'<div class="front"><img src="images/mat-sau.jpg"/></div>'+
		'<div class="back" ><img src="images/mat-truoc' + cards[i] +'.jpg"/></div>' +

		'</div></div>';

	};
	$('.container').html(html);

	var html=document.getElementsByClassName('container');

	for(var i=0;i<cards.length;i++){
		html+='<div class="grid">'+
		'<div class="box_1" dataname='+ cards[i] + ' onclick="flip(this)">'+


		'<div class="front-image"><img src="images/mat-truoc' + cards[i] +'.jpg"/></div>' +
		'<div class="back-image"><img src="images/mat-sau.jpg"/></div>'+
		'</div></div>';

		// var grid=document.createElement("div");
		// grid.classList.add("grid");
		// var card=document.createElement("div");
		// card.classList.add("box_1");
		// card.setAttribute("dataname",cards[i]);
		// card.addEventListener("click",flip);
		// var front=document.createElement("div");
		// front.classList.add("back-image");
		// var img=document.createElement("img");
		// img.src="images/mat-truoc\' + cards[i] +\'.jpg";
		// front.innerHTML=img;
		// var back=document.createElement("div");
		// front.classList.add("front-image");
		// var img=document.createElement("img");
		// img.src="images/mat-sau.jpg";
		// back.innerHTML=img;
		// card.appendChlid(front);
		// card.appendChlid(back);
		// grid.appendChlid(card);
		// html.appendChlid(grid);
	};

	var run=setInterval(function(){
		runtimeout--;
		$('.time').html(runtimeout);
		if(runtimeout==0){
			clearInterval(run);
			alert("You Are Lose!!!");
		}
	},1000);
	$('.container').html(html);
});
