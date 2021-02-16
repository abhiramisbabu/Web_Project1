// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/new.png') {
      myImage.setAttribute('src','image/moz4.png');
    } 
    else {
      myImage.setAttribute('src','image/new.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
myButton.onclick = function() {
  setUserName();
}