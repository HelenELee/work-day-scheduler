var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submissio
  var signUpDetails = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }

  console.log(JSON.stringify(signUpDetails));
  // TODO: Set new submission to local storage 
  localStorage.setItem("signUpDetails", JSON.stringify(signUpDetails));
  var storedObj = localStorage.getItem("signUpDetails");
  console.log(storedObj);
  console.log(JSON.parse(storedObj));

}
)