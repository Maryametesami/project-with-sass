


function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("avatar").src="image/3.jpg";
  } else {
    document.getElementById("avatar").src="image/2.jpg";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes