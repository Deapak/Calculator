let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
flag=0;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (!isNaN(value)) handelNumber(value);
  screen.innerText = buffer;
}

function handelNumber(numberString) {
    if(flag==1){
        buffer='0';
        flag=0;
    }
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer = buffer + numberString;
  }
}

function add() {
    previousOperator='+';
  runningTotal += parseInt(buffer);
  console.log(runningTotal);
  buffer = "0";
}

function subtract() {
    previousOperator='-';
    if(runningTotal==0){
        runningTotal=parseInt(buffer);
    }
    else{
        runningTotal -= parseInt(buffer);
    }

  console.log(runningTotal);
  buffer = "0";
}

function mult() {
    previousOperator='x';
    if(runningTotal==0){
        runningTotal=parseInt(buffer);
    }
    else{
        runningTotal *= parseInt(buffer);
    }
  console.log(runningTotal);
  buffer = "0";
}

function div() {
    previousOperator='/';
    if(runningTotal==0){
        runningTotal=parseInt(buffer);
    }
    else{
        runningTotal /= parseInt(buffer);
    }
  console.log(runningTotal);
  buffer = "0";
}
function back() {
  
  if(buffer.length===1){
      buffer ='0';
  }
  else{
      buffer = buffer.substring(0,buffer.length-1)
  }
}

function eq() {
  if(previousOperator=== null){
    return ;
  }
    if(previousOperator==='+'){
        runningTotal+=parseInt(buffer);
    }
    if(previousOperator==='-'){
        runningTotal-=parseInt(buffer);
    }
    if(previousOperator==='x'){
        runningTotal*=parseInt(buffer);
    }
    if(previousOperator==='/'){
        runningTotal/=parseInt(buffer);
    }
    console.log(runningTotal);

  buffer = runningTotal;
  flag=1;
}

function clr(){
runningTotal = 0;
buffer = "0";
let previousOperator="";
flag=0;
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      
      buttonClick(event.target.innerText);
      
    });
}

init();
