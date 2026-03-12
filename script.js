// Get the counter number element from HTML
const counter = document.getElementById("counter")

// Get the plus button from HTML
const plusBtn = document.getElementById("plus")

// Get the minus button from HTML
const minusBtn = document.getElementById("minus")

// Starting number value
let count = 0


// Function to update number on screen
function updateCounter(){

  // Show the number inside HTML
  counter.innerText = count


  // If number becomes 10
  if(count === 10){
    // Disable the plus button
    plusBtn.disabled = true
  }else{
    // Otherwise enable it
    plusBtn.disabled = false
  }


  // If number becomes 0
  if(count === 0){
    // Disable minus button
    minusBtn.disabled = true
  }else{
    // Otherwise enable it
    minusBtn.disabled = false
  }

}


// When user clicks PLUS button
plusBtn.addEventListener("click", function(){

  // Increase number by 1
  count++

  // Update the screen
  updateCounter()

})


// When user clicks MINUS button
minusBtn.addEventListener("click", function(){

  // Decrease number by 1
  count--

  // Update the screen
  updateCounter()

})


// Run once when page loads
updateCounter()
