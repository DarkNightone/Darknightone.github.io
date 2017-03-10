


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

	if(!current){
		current=$(card);
		current.removeAttr("onclick");
	}

else{

	if(current.attr("dataname")!=$(card).attr("dataname")){
		setTimeout(function(){
			current.toggleClass("flipped");
			$(card).toggleClass("flipped");
			 current.attr('onclick','flip(this)');
			 $(card).attr('onclick','flip(this)');
			current=null;

		},500);

	}
	else{
		setTimeout(function(){
			$(card).css('opacity','0');
			current.css('opacity','0');
			current=null;
			count++;
			if(count==7)alert("You Are Win!!!");
		},500);

	}

	}
}

$(function(){
	cards=shuffle(cards);
	cards=cards.concat(cards);
	var html='';

	for(var i=0;i<cards.length;i++){
		html+='<div class="grid">'+
		'<div class="card" dataname= "' + cards[i]+'" onclick="flip(this)">'+
		'<div class="front"><img src="images/mat-sau.jpg"/></div>'+
		'<div class="back" ><img src="images/mat-truoc' + cards[i] +'.jpg"/></div>' +

		'</div></div>';
	};

	$('.container').html(html);

	var run=setInterval(function(){
		runtimeout--;
		$('.time').html(runtimeout);
		if(runtimeout===29){
			$("<audio></audio>").attr({
				'src':'audio/Dien-may-xanh-Remix-Dien-may-xanh.mp3	',
				'volume':0.6,
				'autoplay':'autoplay'
			}).appendTo(".container");
		}
		if(runtimeout==0){
			clearInterval(run);
			alert("You Are Lose!!!");
		}
	},1000);
});
