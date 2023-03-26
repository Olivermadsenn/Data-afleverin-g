"use strict";

window.addEventListener("load", initApp);

function initApp() {
  const jimbo = {
    name: "Jimbo Kern",
    nickname: "Jimbo",
    image: "Jimboooooooo.webp",
    occupation: "Hunter, Gun Shop Owner, Little League Umpire, Television Show Host",
    age: 51,
    voicedBy: "Matt Stone",
    gender: "Male",
    religion: "Roman Catholic",
    catchphrase: "It's coming right for us!",
    hairColor: "Brown",
    schoolGrade: null,
    firstAppearance: "S01 E01, S01 E02",
  };
  console.log(jimbo);

  showCharacter(jimbo);
}

function showCharacter(character) {
  const html = /* html */ `
    <div class="grid-item">
      <h2>${character.name}</h2>
      <image src="${character.image}" />
      <p>Age: ${character.age}</p>
      <p>Gender: ${character.gender}</p>
      <p>Voiced by: ${character.voicedBy}</p>
    </div>
  `;

  document.querySelector("#characters").insertAdjacentHTML("beforeend", html);
  document.querySelector("#characters div:last-child").addEventListener("click", characterClicked);

  function characterClicked() {
    console.log(character);
    const dialogHtml = /* html */ `
      <p>Name: ${character.name}</p>
      <p>Nickname: ${character.nickname}</p>
      <image src="${character.image}" />
      <p>Occupation: ${character.occupation}</p>
      <p>Age: ${character.age}</p>
      <p>Voiced by: ${character.voicedBy}</p>
      <p>Gender: ${character.gender}</p>
      <p>Religion: ${character.religion}</p>
      <p>Catchphrase: ${character.catchphrase}</p>
      <p>Hair color: ${character.hairColor}</p>
      <p>School grade: ${character.schoolGrade}</p>
      <p>First appearance: ${character.firstAppearance}</p>
    `;
    const dialog = document.querySelector("dialog");
    dialog.innerHTML = "";
    dialog.insertAdjacentHTML("beforeend", dialogHtml);
    dialog.showModal();
  }
}
