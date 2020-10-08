/*jshint esversion: 6 */
fetch("https://dog.ceo/api/breeds/list")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let breeds = data.message;
    console.log(breeds);
    let breedList = document.getElementById("breed-list");
    breeds.forEach(function (breed) {
      let breedElement = document.createElement("option");
      breedElement.setAttribute("value", breed);
      breedElement.innerHTML = breed;
      breedList.appendChild(breedElement);
    });
  });

let button = document.getElementById("generate");

let dropdown = document.getElementById('breed-list');

dropdown.addEventListener('change', function(event) {
  fetch(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let dogImage = document.createElement("img");
    dogImage.setAttribute("src", data.message);
    document.body.appendChild(dogImage);
    button.innerHTML = `${data.message}`;
  });
});

button.addEventListener("click", function () {
  button.innerHTML = "Hello";
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let dogImage = document.createElement("img");
      dogImage.setAttribute("src", data.message);
      document.body.appendChild(dogImage);
      button.innerHTML = `${data.message}`;
    });
});
