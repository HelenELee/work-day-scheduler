var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";
//ADDED create list of options
li1.textContent = "apples";
li2.textContent = "pizza";
li3.textContent = "dumplings";
li4.textContent = "cupcakes";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 

//favoriteEl.appendChild(listEl);
//ADDED append options
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
listEl.setAttribute("style", "background-color: #333333; padding:20px");

//ADDED Get all li elements
var allLiElements = document.querySelectorAll("li");
//ADDED create array of four colours for use in loop
var colours = ["blue", "red", "orange", "purple"];

//ADDED - loop through all li elements and add style and background
//colour from array
for (var i=0; i<allLiElements.length; i++) {
    allLiElements[i].setAttribute("style", "color: white; padding:5px; margin-left:35px");
    allLiElements[i].style.backgroundColor= colours[i];
}
// TODO: Add ordered list items containing four favorite foods


var arrayOfElements = [
    {},
    {},
]

