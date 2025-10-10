const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const weightGuide = document.querySelector("#weightGuide");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid Weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = bmi;
    if (bmi < 18.6) {
      weightGuide.innerHTML = "Results is Under Weight";
    } else if (bmi > 24.9) {
      weightGuide.innerHTML = "Results is Over Weight";
    } else {
      weightGuide.innerHTML = "Results is in Normal Range";
    }
  }
});
