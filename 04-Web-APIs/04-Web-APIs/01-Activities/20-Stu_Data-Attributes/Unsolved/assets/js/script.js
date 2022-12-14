var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  if (element.dataset.state == 'hidden'){
    element.textContent = element.dataset.number;
    element.dataset.state = 'visible';
  } else {
    element.textContent = '';
    element.dataset.state = 'hidden';
  }
  
  

});
