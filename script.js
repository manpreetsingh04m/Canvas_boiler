/* Iteration 4: Make the Canvas App Functional */
var backgroundElement = document.getElementById("background");
var inputbackground = document.getElementById("inputbackground");
inputbackground.oninput = () => {
  var colorvalue = inputbackground.value;
  backgroundElement.style.fill = colorvalue;
}
var helmet = document.getElementById("helmet");
var inputhelmetnputbackground = document.getElementById("inputhelmet");
inputhelmet.oninput = () => {
  var colorvalue1 = inputhelmet.value;
  helmet.style.fill = colorvalue1;
}
var eyes = document.getElementById("eyes");
var inputeyes = document.getElementById("inputeyes");
inputeyes.oninput = () => {
  var colorvalue2 = inputeyes.value;
  eyes.style.fill = colorvalue2;
}
var faceplate = document.getElementById("face-plate");
var inputfaceplate = document.getElementById("inputface-plate");
inputfaceplate.oninput = () => {
  var colorvalue2 = inputfaceplate.value;
  faceplate.style.fill = colorvalue2;
}