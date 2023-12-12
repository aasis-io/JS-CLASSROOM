function validate() {
  var num_1 = document.getElementById("first_num").value,
    num_2 = document.getElementById("second_num").value;

  if ((num_1 == null || num_1 == "") && (num_2 == null || num_2 == "")) {
    alert("Both Field is empty");
  } else if (num_1 == null || num_1 == "") {
    alert("Field no 1 is empty");
  } else if (num_2 == null || num_2 == "") {
    alert("Field no 2 is empty");
  } else {
  }
}

function add(num_1, num_2) {
  var num_1 = document.getElementById("first_num").value,
    num_2 = document.getElementById("second_num").value;
  num_1 = parseFloat(num_1);
  num_2 = parseFloat(num_2);
  res = num_1 + num_2;
  document.getElementById("answer").innerHTML = res;
}

function substract(num_1, num_2) {
  var num_1 = document.getElementById("first_num").value,
    num_2 = document.getElementById("second_num").value;
  num_1 = parseFloat(num_1);
  num_2 = parseFloat(num_2);
  res = num_1 - num_2;
  document.getElementById("answer").innerHTML = res;
}

function multiply(num_1, num_2) {
  var num_1 = document.getElementById("first_num").value,
    num_2 = document.getElementById("second_num").value;
  num_1 = parseFloat(num_1);
  num_2 = parseFloat(num_2);
  res = num_1 * num_2;
  document.getElementById("answer").innerHTML = res;
}

function divide(num_1, num_2) {
  var num_1 = document.getElementById("first_num").value,
    num_2 = document.getElementById("second_num").value;
  num_1 = parseFloat(num_1);
  num_2 = parseFloat(num_2);
  res = num_1 / num_2;
  document.getElementById("answer").innerHTML = res;
}
