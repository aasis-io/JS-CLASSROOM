function validate() {
  var email = document.getElementById("email").value;
  var passWord = document.getElementById("password").value;
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (
    (email == null || email == "") &&
    (passWord == null || passWord == "")
  ) {
    alert("Email & Password Field is Empty!");
  } else if (email == "" || email == null) {
    alert("Email Field is Empty!");
  } else if (passWord == "" || passWord == null) {
    alert("Password Field is Empty!");
  } else if (passWord.length < 6) {
    alert("Password length must be at least 6!");
  } else {
    if (email.match(emailFormat)) {
      alert("Valid Email Address & Password!");
      return true;
    } else {
      alert("Invalid Email Address!");
      return false;
    }
  }
}
