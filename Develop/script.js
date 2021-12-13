// Global Variables
var generateBtn = document.querySelector("#generate");
var characters;
// Function Starts When Button Is Pressed  
function initiate(){
  debugger;
  passwordLength();
  passwordLowerCase();
  passwordUpperCase();
  passwordNumeric();
  passwordCharacters();
  lowerCase = passwordLowerCase();
  uppercase = passwordUpperCase();
  numeric = passwordNumeric();
  specialCharacters = passwordCharacters();
  generatePassword();
  console.log(passwordLowerCase);

  var password = "" + generatePassword();
  document.getElementById("generate").value = password;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

//
function generatePassword(){
  for (var i=0; i<passwordLength; i++){
    randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber,randomNumber+1);
  }
  document.getElementById("generate").value = password;
};




var passwordLength = function() {
  var length = "";
  
  while (length === "" || length === null) {
    length = prompt("How many characters would you your password to be between 8-128?");
  
    if(length < 8 || length > 128){
      window.alert("Your password length must be between 8-128 characters. Please try again!");
      passwordLength();
  } if(length = 8 <= 128){
    return length;
  }
  }
};

var passwordLowerCase = function(){
  var lowerCase = "";
  if (lowerCase === ""){
     lowerCase = confirm("Would you like your password to include lower case letters?");
     var lowerCase = "abcdefghijklmnopqrstuvwxyz";
     return lowerCase;
  } else{
  return lowerCase;
}
};

var passwordUpperCase = function(){
  var upperCase = "";
  if (upperCase === ""){
     upperCase = confirm("Would you like your password to include upper case letters?");
     var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     return upperCase;
  } else{
  return upperCase;
}
};

var passwordNumeric = function(){
  var numeric = "";
  if (numeric === ""){
     numeric = confirm("Would you like your password to include numerical characters?");
     var numeric = "0123456789";
     return numeric;
  } else{
  return numeric;
}
};

var passwordCharacters = function(){
  var specialCharacters = "";
  if (specialCharacters === ""){
     specialCharacters = confirm("Would you like your password to include special characters?");
     specialCharacters = "!#$%&'()*+,-.:;<=>?@[]^_`{|}~";
     return specialCharacters;
  } else{
  return specialCharacters;
}
};

// Add event listener to generate button
generateBtn.addEventListener("click", initiate);
