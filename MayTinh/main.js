$(document).ready(function(){
    var keys=document.querySelectorAll("#container span");
    var operator=["+",'-','x','÷'];
    var  decimaAdded=false;
    for(var i=0;i<keys.length;i++){

        keys[i].onclick=function(e) {

            var input = document.querySelector(".screen");

            var inputVal = input.innerHTML;

            var btnVal = this.innerHTML;


            if (btnVal == 'C') {
                input.innerHTML = '';
                decimaAdded = false;
            }


            else if (btnVal == '=') {
                var equation = inputVal;

                var lastChar = equation[equation - 1];

                equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

                if (lastChar == '.' || operator.indexOf(lastChar) > -1) {

                    equation = equation.replace(/.$/, '');
                }
                if (equation) {
                    input.innerHTML = eval(equation);

                }

                decimaAdded = false;
            }
            else if (operator.indexOf(btnVal) > -1) {

                var lastChar = inputVal[inputVal.length - 1];

                if (inputVal != '' && operator.indexOf(lastChar) == -1) {
                    if (lastChar == '.') {
                        input.innerHTML = inputVal.replace(/.$/, '');
                    }
                    input.innerHTML += btnVal;
                }


                else if (inputVal == '' && btnVal == '-') {
                    input.innerHTML += btnVal;
                    // Replace the last operator (if exists) with the newly pressed operator
//                     if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
//                         // Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
//                         input.innerHTML = inputVal.replace(/.$/, btnVal);
//                     }

                    decimalAdded = false;
                }
            }

            else if (btnVal == '.') {
                if (!decimaAdded) {
                    input.innerHTML += btnVal;
                    decimaAdded = true;
                }
            }
            else{
                var lastChar=inputVal[inputVal.length-1];
                var lastChar2=inputVal[inputVal.length-2];
                if(lastChar==lastChar2)
                    input.innerHTML=inputVal.replace(lastChar2,lastChar);
                input.innerHTML += btnVal;

            }
            e.preventDefault();
        }
    }
});


