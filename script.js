const inputField = document.getElementById("age")

const calculateBtn = document.getElementById("calculate")

const answerBox = document.getElementById("answer")

answerBox.innerText = "Hello World"
 
calculateBtn.addEventListener("click", function(){
  const age = inputField.value
  if (age < 18) {
    answerBox.innerText = "Cannot drink"}
  else {
    answerBox.innerText = "Can drink"
  }
})
