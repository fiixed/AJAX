/*jshint esversion: 6 */
let button = document.getElementById("generate");

button.addEventListener("click", function () {
  button.innerHTML = "Hello";
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.message);
    });
});
