"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const character = await getCharacter();
  character.forEach(showCharacter);


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
      <p>Episodes: ${character.episodes}</p>
      <p>Appearances: ${character.appearances}</p>
      <p>First appearance: ${character.firstAppearance}</p>
      <form method="dialog">
           <button>Close</button>
      </form>
    `;
    const dialog = document.querySelector("dialog");
    dialog.innerHTML = "";
    dialog.insertAdjacentHTML("beforeend", dialogHtml);
    dialog.showModal();
  }
}

async function getCharacter(url){
  const response = await fetch(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
  const data = await response.json();
  return data;
}
