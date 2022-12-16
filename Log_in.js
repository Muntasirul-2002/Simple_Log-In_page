function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    alert("Error: username and password cannot be empty!");
    return false;
  }

  return true;
}
