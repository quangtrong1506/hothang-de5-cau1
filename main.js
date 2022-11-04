function checkForm() {
  var f = document.getElementById("fname").value,
    l = document.getElementById("lname").value,
    e = document.getElementById("email").value,
    ce = document.getElementById("cemail").value,
    p = document.getElementById("password").value;

  if (f.match(/[0-9]/g)) alert("First name can't contain numbers.");
  else if (l.match(/[0-9]/g)) alert("Last name can't contain numbers.");
  else if (!e.match(/@/g)) alert("Email can contain @ character");
  else if (!e.match(/@\w+(\.\w+)+$/g)) alert("Email must be level 2 email");
  else if (e != ce) alert("Email confirmation is incorrect");
  else if (p.length < 7) alert("Password must be at least 7 characters long");
  else if (!p.match(/([a-zA-Z])*([0-9])*([!@#$%^^&*()?])/g))
    alert(
      "Password must contain at least 1 letter, 1 number and 1 special character"
    );
  else alert("Sign Up Successfully");
}
