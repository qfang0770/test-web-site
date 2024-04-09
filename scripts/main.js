let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};
