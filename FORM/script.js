function validate() {
  var userName = document.getElementById("username").value;
  var passWord = document.getElementById("password").value;

  if (
    (userName == null || userName == "") &&
    (passWord == null || passWord == "")
  ) {
    alert("Username & Password Field is Empty!");
  } else if (userName == "" || userName == null) {
    alert("Username Field is Empty!");
  } else if (passWord == "" || passWord == null) {
    alert("Password Field is Empty!");
  } else if (passWord.length < 6) {
    alert("Password length must be at least 6!");
  } else {
    alert("Valid Credentials Inserted");
  }
}
