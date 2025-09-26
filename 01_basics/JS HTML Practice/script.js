const mainText = document.getElementById("mainTitle");
const originalText = mainText.innerText;
const alteredText = "The Title has been altered";
const message = document.getElementById("messageAlert");

function changeTitle() {
  if (mainText.innerText === alteredText) {
    message.innerText = "Title has already been changed";
    message.style.color = "red";
  } else {
    mainText.innerText = alteredText;
    message.innerText = "Title changed successfully";
    message.style.color = "green";
  }
}
function resetTitle() {
  if (mainText.innerText === originalText) {
    message.innerHTML = "No changes made";
    message.style.color = "blue";
  } else {
    mainText.innerHTML = originalText;
    message.innerText = "Title has been reset";
    message.style.color = "green";
  }
}
function showStatus() {
  if (mainText.innerText === originalText) {
    message.innerText = "Title is still unchanged";
    message.style.color = "green";
  } else {
    message.innerText = "Title has been modified";
    message.style.color = "red";
  }
}