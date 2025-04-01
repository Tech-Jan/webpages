const myImage = document.querySelector("img");

if (myImage) {
  myImage.addEventListener("click", function () {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/bigduck3.jpeg") {
      myImage.setAttribute("src", "images/bigduck.jpeg");
    } else {
      myImage.setAttribute("src", "images/bigduck3.jpeg");
    }
  });
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `THe Duck is named, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `THe Duck is named, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
