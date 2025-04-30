// We can use a sequence of ternary operators to create a more complex conditional branching.
// For example, the following code checks if a user is an admin, a moderator, or a regular user:

let role = prompt("What is your role?", "");

let access =
  role === "Admin"
    ? "Granted with all privilleges"
    : role === "Moderator"
    ? "Granted but with fewer permissions"
    : role === "User"
    ? "Granted but with even fewer permissions"
    : "Access Denied";

alert(access);

/*
The code above is equivalent to the following if-else statement:

let role = prompt("What is your role?", '');

if (role === "Admin") {
  alert("Granted with all privilleges");
} else if (role === "Moderator") {
  alert("Granted but with fewer permissions");
} else if (role === "User") {
  alert("Granted but with even fewer permissions");
} else {
  alert("Access Denied");
}
*/

// Another example
let userAge = prompt("How old are you?", "");

let greeting =
  userAge <= 10
    ? "Oh, you are still a baby!"
    : userAge >= 13 && userAge <= 19
    ? "You are a teenager!"
    : userAge > 19 && userAge <= 35
    ? "Hello, young adult!"
    : userAge > 35 && userAge <= 55
    ? "Welcome to Middle Age!"
    : userAge > 55 && userAge <= 75
    ? "Hello, Senior Citizen!"
    : "Wow, Hello Sensei!";

alert(greeting);
