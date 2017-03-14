

var cards=["0",'1','2','3','4','5'];


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
	var list=[];
	if(current===null){
		current=$(card);
		current.removeAttr("onclick");
		list+=current
	}

	else{
		list+=$(card)
		console.log(list)
		for(var i=0;i<list.length;i++){

		if(list[0].attr("dataname")!=list[1].attr("dataname")){

			setTimeout(function(){

				list[1].toggleClass("flipped");

				list[0].toggleClass("flipped");

				list[0].attr('onclick','flip(this)')

			},500);
		}

		else{

			setTimeout(function(){
				count+=1;
				list[1].css('opacity','0');
				list[0].css('opacity','0');
				list=[]
				if(count===5)alert("You Are Win!!!");
			},200);

		}

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
