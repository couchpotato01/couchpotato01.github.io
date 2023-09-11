console.log("from script file");

//------ SHOW NAV BAR WHEN SCROLLING ------//
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}


//------ CHANGE BACKGROUND AND TEXT COLOUR ------//
// background
let bgColourPicker;
const defaultBgColor = "#08605F";
// text
let textColourPicker;
const defaultTextColour = "#DE0D92";

window.addEventListener("load", startup, false);

function startup() {
  // background
  bgColourPicker = document.querySelector("#bgColour");
  bgColourPicker.value = defaultBgColor;
  bgColourPicker.addEventListener("input", updateLiveBg, false);
  bgColourPicker.select();
  
  // text
  textColourPicker = document.querySelector("#textColour");
  textColourPicker.value = defaultTextColour;
  textColourPicker.addEventListener("input", updateLiveText, false);
  textColourPicker.select();
}
// background
function updateLiveBg(event) {
  const body = document.querySelector("body");
  if (body) {
    body.style.background = event.target.value;
  }
}
// text
function updateLiveText(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}