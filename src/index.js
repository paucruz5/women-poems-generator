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
    "You are an expert in searching poems only written by women. Your mission is to provide a 4 line paragraph taken from a poem written by a woman, in basic HTML format, separating each line with a <br />. Make sure to follow the user instructions and display in the screen only the name of the poem in <strong> first; then <br/> the poem itself, and <br/> at the bottom provide in <i> the name of the woman who wrote it, her nationality and the year she wrote the poem. Do not provide any poems written by men, provide only poems written by women";
  let prompt =
    "User instructios: Please find a real poem written by any woman in the world about ${instructionsInput.value}. Please provide poems written only by women";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
