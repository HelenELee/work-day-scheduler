var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
function incrementCount() {
  count++;
  setCounterText();
}

function decrementCount() {
  if (count > 0) {
    count--;
    setCounterText();
  }
}

// TODO: Add event listener to decrement button 

incrementEl.addEventListener("click", incrementCount);
decrementEl.addEventListener("click", decrementCount);

//incrementEl.addEventListener("mouseover", incrementCount);
