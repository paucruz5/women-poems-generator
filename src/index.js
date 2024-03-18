function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-text", {
    strings: "Poem example",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
