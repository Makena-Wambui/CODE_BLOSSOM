// Prompt user for Login Name
let loginName = prompt("Who's there", "");

// If the visitor enters "Admin", then prompt for a password.
if (loginName === "Admin") {
  let password = prompt("Password?", "");

  // If it equals “TheMaster”, then show “Welcome!”
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null) {
    // if password is an empty string or null – show “Canceled”
    alert("Canceled");
  } else {
    // if password is another string – show “Wrong password”
    alert("Wrong password");
  }
} else if (loginName === "" || loginName === null) {
  // if the input is an empty line or Esc – show “Canceled”
  alert("Canceled");
} else {
  // if it’s another string
  alert("I don't know you");
}
