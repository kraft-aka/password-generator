
// chars for password
const chars = ['abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789','!@#$%^&*()_+|?><-+*/°','öäüß'];

// define count for length 
let count = 4;

// getting elements from html
const button = document.getElementById('button-el');
const passowrdOne = document.getElementById('one');
const passowrdTwo = document.getElementById('two');
const passowrdThree = document.getElementById('three');
const passowrdFour = document.getElementById('four');
const counter = document.getElementById('count');



// generate a random passowrd
function generatePassword() {
  // placeholder for password
  let result = '';

  // convert array to string
  let charStr = chars.toString();

  for (let i = 0; i < count; i++) {
    result += charStr.charAt(Math.floor(Math.random() * charStr.length));
  } 
  console.log(result)
  return result
}

// generate four passowrds and display them
function generatePasswords() {
  let one = generatePassword()
  passowrdOne.textContent = one;

  let two = generatePassword();
  passowrdTwo.textContent = two;

  let three = generatePassword();
  passowrdThree.textContent = three;

  let four = generatePassword();
  passowrdFour.textContent = four;
}

function lengthOfPassword() {
  count += 1;
  counter.textContent = 'Length of Password is:' + ' ' + count;
}

generatePasswords();
lengthOfPassword();



