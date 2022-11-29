function dataValidation() {
    let x = document.forms["newsletter"]["name"].value;
    if (x == "") {
      alert("Name must be filled out!");
      return false;
    }
    let y = document.forms["newsletter"]["email"].value;
    if (y == "") {
      alert("Email must be filled out!");
      return false;
    }
    let z = document.forms["newsletter"]["ph"].value;
    if (z == "") {
      alert("Phone Number must be filled out!");
      return false;
    }
    
    var radios = document.getElementsByName("x");
     for (var i = 0, len = radios.length; i < len; i++) {
          if (radios[i].checked) {
              return true;
          } 
     }
     alert("Choose how you want to be notified by.")
     return false;
}