
function submitFunction(){
  var x=myForm.username.value
  var y=myForm.pwd.value

  if(x===''||x===null||y===''||y===null){
    alert('Both fields can\'t be empty.')
  }
  else{
    if(x==='Hoan'&&y==='12345')
    alert('Login Successful.')
    else {
      alert(' Incorrect Password or Username.');
    }
  }
}
