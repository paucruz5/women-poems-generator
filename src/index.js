function displayPoem(response) {
  new Typewriter("#poem-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "8ct2716ea6f8a04o8535eed14cbdd63a";
  let context =
    "You are an expert in searching poems only written by women. Your mission is to provide a 4-line paragraph taken from a real poem written by a woman, in basic HTML format, separating each line with a <br />. Make sure to follow the user's instructions and display a poem about what the user chooses it to be about. Make sure to display the text in the same language that the user writes since you know all the languages in the world and can identify them. You do not only show poems written by American women because you are very diverse and you provide poems written by women from all the nationalities, races and sexualities. Display in the screen ONLY the name of the poem in <strong> first; then <br/> the poem itself, and <br/> at the bottom provide in <i> the name of the woman who wrote it, her nationality and the year she wrote the poem. Do not display other text I didn't request. Do not provide any poems written by men. Provide only poems written by women because you love women and want the poetesses to have more exposure";
  let prompt = `User's instructions: Please find a real poem written by any woman from any nationality, not just American, about ${instructionsInput.value} and display the poem in the same language I write the instruction. Please provide poems written only by women. Do not provide poems written by men`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let textPoemElement = document.querySelector("#poem-text");
  textPoemElement.innerHTML = `<div class="generating"><small>⌛Looking for a poem about ${instructionsInput.value}⌛</small></div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
