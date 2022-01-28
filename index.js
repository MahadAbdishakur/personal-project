const arcSelect = document.querySelector('#arc-select')
const charSelect = document.querySelector('#charecter-select')

let baseUrl = "http://localhost:5055";

function getCharecters(){
axios.get(baseUrl+ '/charecters')
.then(res => {
  res.data.forEach(element => {
    const option = document.createElement('option')
    option.setAttribute('value', element.charecter_id)
    option.textContent = element.name
    charSelect.appendChild(option)
  });
})  
}
getCharecters();
function getArcs() {
axios.get(baseUrl+ '/arcs')
.then(res => {
  res.data.forEach(element => {
    const option = document.createElement('option')
    option.setAttribute('value', element.arcs_id)
    option.textContent = element.name
    arcSelect.appendChild(option)
  });
})  

};
getArcs();













// Get the modal
var L = document.getElementById("LModal");
var Z = document.getElementById("ZModal");
var N = document.getElementById("NModal");
var U = document.getElementById("UModal");
var S = document.getElementById("SModal");
var C = document.getElementById("CModal");
var R = document.getElementById("RModal");
var F = document.getElementById("FModal");
var B = document.getElementById("BModal");
var J = document.getElementById("JModal");

// Get the button that opens the modal
var Monkey = document.getElementById("luffy-pic");
var Roronoa = document.getElementById("zoro-pic");
var Thief = document.getElementById("nami-pic");
var Useless = document.getElementById("usopp-pic");
var Cook = document.getElementById("sanji-pic");
var Monster = document.getElementById("chopper-pic");
var Devil = document.getElementById("robin-pic");
var Robot = document.getElementById("franky-pic");
var Skull = document.getElementById("brook-pic");
var Knight = document.getElementById("jinbei-pic");


// Get the <span> element that closes the modal
var Span = document.getElementsByClassName("close")[0];
var Span1 = document.getElementsByClassName("close")[1];
var Span2 = document.getElementsByClassName("close")[2];
var Span3 = document.getElementsByClassName("close")[3];
var Span4 = document.getElementsByClassName("close")[4];
var Span5 = document.getElementsByClassName("close")[5];
var Span6 = document.getElementsByClassName("close")[6];
var Span7 = document.getElementsByClassName("close")[7];
var Span8 = document.getElementsByClassName("close")[8];
var Span9 = document.getElementsByClassName("close")[9];
var Span10 = document.getElementsByClassName("close")[10];


// When the user clicks on the button, open the modal
Monkey.onclick = function() {
  L.style.display = "block";
}
Roronoa.onclick = function() {
  Z.style.display = "block";
}
Thief.onclick = function() {
  N.style.display = "block";
}
Useless.onclick = function() {
  U.style.display = "block";
}
Cook.onclick = function() {
  S.style.display = "block";
}
Monster.onclick = function() {
  C.style.display = "block";
}
Devil.onclick = function() {
  R.style.display = "block";
}
Robot.onclick = function() {
  F.style.display = "block";
}
Skull.onclick = function() {
  B.style.display = "block";
}
Knight.onclick = function() {
  J.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
Span.onclick = function() {
  L.style.display = "none";
};
Span1.onclick = function() {
  Z.style.display = "none";
};
Span2.onclick = function() {
  N.style.display = "none";
}
Span3.onclick = function() {
  U.style.display = "none";
}
Span4.onclick = function() {
  S.style.display = "none";
}
Span5.onclick = function() {
  C.style.display = "none";
}
Span6.onclick = function() {
  R.style.display = "none";
}
Span7.onclick = function() {
  F.style.display = "none";
}
Span8.onclick = function() {
  B.style.display = "none";
}
Span9.onclick = function() {
  J.style.display = "none";
}

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }