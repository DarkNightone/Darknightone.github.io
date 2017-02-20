function check(){

	var question1=quiz.question1.value;
	var question2=quiz.question2.value;
	var question3=quiz.question3.value;
	var correct=0;

	if(question1=="Providence"){
		correct++;
	}

	if(question2=="Hartford"){
		correct++;
	}

	if(question3=="Albany"){
		correct++;
	}

	 var messages=["Great Job!","That's just OKay","You really need to do better"]
	  var pictures=["images/win.gif","images/meh.gif","images/lose.gif"];
	 var range;

	 if(correct<1){
	 	range=2;
	 }

	 if(correct>0&&correct<3){
	 	range=1;
	 }

	 if(correct>2){
	 	range=0;
	 }

	document.getElementById("after_submit").style.visibility="visible";

	document.getElementById("message").innerHTML=messages[range];

	document.getElementById("number_correct").innerHTML="You got " + correct + " correct";

	document.getElementById("picture").src=pictures[range];
}