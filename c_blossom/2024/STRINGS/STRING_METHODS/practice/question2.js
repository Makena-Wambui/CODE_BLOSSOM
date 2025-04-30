/*
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

*/

function checkSpam(str) {
  // searching for lowercase viagra and upercase XXX.
  // So we convert the string to lowercase first using to lower case method.

  if (typeof str !== "string") {
    console.log("Input is not a string");
  } else {
    let result =
      str.toLowerCase().includes("viagra") || str.toUpperCase().includes("XXX");
    console.log(result);
  }
}
checkSpam("buy ViAgRA now");
checkSpam("free xxxxx");
checkSpam("innocent rabbit");
checkSpam("");
checkSpam(3);
checkSpam(NaN);
