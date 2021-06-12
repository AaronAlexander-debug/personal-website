let myButton = document.querySelector('button.goodButton');
let myHeading = document.querySelector('p.mentionText');

myButton.onclick = function() {
    setUserName();
  }

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my homepage, ' + myName + '!';
  }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my homepage, ' + storedName + '!';
  }