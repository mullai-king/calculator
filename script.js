// let  memory = parseFloat(localStorage.setItem("memory"))
function appendCharacter(character){
  const display = document.getElementById("result");
  display.value +=character;
}
function clearDisplay(){
  document.getElementById('result').value ="";
}

function deleteLast(){
  const display =document.getElementById("result");
  display.value = display.value.slice(0,-1)
}

function calculation(){
  const display = document.getElementById("result");
  try{
    display.value = eval(display.value)
  }
  catch(error){
    display.value ="Error";
  }
  
}

document.addEventListener("keydown", (event) => {
  if (event.key.match(/[0-9]|[\+\-\*\/\%\.]/)) {
    const display =document.getElementById("result");
    display.value += (event.key);
  } else if (event.key === "Enter") {
      calculate();
  } else if (event.key === 'Backspace') {
      deleteLast()
  }
  else {
      alert("Numbers only allowed");
  }
});
