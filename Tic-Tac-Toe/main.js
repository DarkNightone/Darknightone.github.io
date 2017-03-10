function gameStart(){
  for(var i=1;i<=9;i++){
    resetBox(i);
  }
  document.turn='X';
  document.winner=null;
  setMessage(document.turn + '   get\'s to  Start.')
}
function setMessage(msg){
  document.getElementById('message').innerText=msg;
}
function nextMove(square){
  if(document.winner===null){

    if(square.innerText===''){
      square.innerText=document.turn;
      if(document.turn==='X')square.style.color='red'

      SwitchTurn();
    }
    else{
      setMessage('Pick another square.')
    }
  }
  else{
    setMessage(document.winner+' already won!')
  }
}
function SwitchTurn(){
  if(CheckforWinner(document.turn)){
    setMessage('Congrats '+document.turn+ ',you won!');
    document.winner=document.turn;
  }
  else if(document.turn==='X'){
    document.turn='O'
    setMessage('It\'s '+document.turn+' Now.')

  }
  else{
    document.turn='X'
    setMessage('It\'s '+document.turn+' Now.')

  }
}
function CheckforWinner(move){
  var result=false
  if(Checkrow(1,2,3,move)||
    Checkrow(7,8,9,move)||
    Checkrow(1,5,9,move)||
    Checkrow(3,5,7,move)||
    Checkrow(1,4,7,move)||
    Checkrow(3,6,9,move)||
    Checkrow(2,5,8,move))
    result=true
    return result
}
function Checkrow(a,b,c,move){
  var result=false;
  var x=document.getElementById('s'+a).innerText
  var y=document.getElementById("s"+b).innerText
  var z=document.getElementById('s'+c).innerText
  if(x===move&&y===move&&z===move){
    result=true
  }
  return result
}
function resetBox(number){
  document.getElementById('s'+number).innerText=''
}
