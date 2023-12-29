alert("are you ready ?");
alert("this file is paasword protected so please provide me your identity");

function Password(){
  var password = "love";

var yname = prompt("what is you name ?");
var newpassword = prompt("password ?");


if (newpassword === password) {
    // Use getElementsByClassName to get a collection of elements with the class "cont"
    var elements = document.getElementsByClassName("cont");
  
    // Check if there is at least one element with the class "cont"
    if (elements.length > 0) {
      // Access the first element in the collection
      var file = elements[0];
  
      // Use classList.remove on the element to remove the "hidden" class
      file.classList.remove("hidden");
      console.log("class removed")

      alert("welcome " + yname + " ji ...");

    } else {
      console.error("Element with class 'cont' not found.");
    }
  } else {
    alert("Incorrect password. Access denied.");
    window.location.href = "index.html";
  }
}

Password();
