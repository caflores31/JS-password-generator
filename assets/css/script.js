// Assignment Code
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Generating Password characters and preferences
function generatePassword() {
    var length = Number(prompt("How many characters would you like your password to be?"));
        while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Please enter how many characters you want, It must be least 8 characters and no more than 128 characters?"));
    var uppers = confirm("Do you like to include uppercase letters?");
    var numbers = confirm ("Do you like to include numbers in your password?");
    var lowerCases = confirm("Do you like to include lowecases in your password?");
    var special = confirm("Do you like to inclue special characters in your password?");
    
    while (!uppers && !lowers && !numbers && !symbols) {
        alert("You must select at least one character type!");
        uppers = confirm("Do you like to include uppercase letters?");
        lowerCases = confirm("Do you like to include lowercase letters?");
        numbers = confirm("Do you like to include numbers?");
        special = confirm("Do you like to include special characters?");
      }
      
      window.addEventListener('load', function() {
        generateNewPassword();
      });
      
      function generateNewPassword() {
        var password = "";

    var allowed = {};
  if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
