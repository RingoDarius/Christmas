
function enterCode(numeral) {
  document.getElementById("code").innerHTML += numeral;
  document.getElementById("message").innerHTML = "&nbsp";
}

function clearText() {
  document.getElementById("code").innerHTML = "&nbsp;";
  document.getElementById("message").innerHTML = "&nbsp";
}
function getCode() {
  var num = document.getElementById("code").innerHTML;

  if (num == "&nbsp;8654") {
    document.getElementById("code").innerHTML = "";
    document.getElementById("numbers").className = "hide";
    document.getElementById("message").className = "correct";
    document.getElementById("message").innerHTML = "<br><br><br><br>Look not to heaven—look in between,<br>What you seek is named in James 1:17.";
  }
  else {
    document.getElementById("code").innerHTML = "&nbsp;";
    document.getElementById("message").className = "incorrect";
    document.getElementById("message").innerHTML = "Incorrect Code Try again later";
  }
}
