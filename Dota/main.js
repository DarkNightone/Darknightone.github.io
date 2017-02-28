

var cards=["0",'1','2','3','4','5','6',"0",'1','2','3','4','5','6'];

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

	if(!current)
		current=$(card);
	else{
		if(current.attr("dataname")!=$(card).attr("dataname")){

				current.toggleClass("flipped");
				$(card).toggleClass("flipped");

			
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

	var html='';

	for(var i=0;i<cards.length;i++){
		html+=
		'<div class="box_1" dataname='+ cards[i] + ' onclick="flip(this);this.onclick=null;">'+

		'<div class="front-image"><img src="images/mat-truoc' + cards[i] +'.jpg"/></div>' +
		'<div class="back-image"><img src="images/mat-sau.jpg"/></div>'+
		'</div>';
	};
	$('.container').html(html);

	var run=setInterval(function(){
		runtimeout--;
		$('.time').html(runtimeout);
		if(runtimeout==0){
			clearInterval(run);
			alert("You Are Lose!!!");
		}
	},1000);
});