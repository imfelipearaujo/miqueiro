const audioButton = document.getElementById("audio-button");
const cifraoContainer = document.body;

audioButton.addEventListener("click", () => {
  playRandomAudio();
  createFallingCifrao();
});

function playRandomAudio() {
  const audioFolder = "Media/";
  const audioFiles = ["audio1.mp3", "audio2.mp3", "audio3.mp3", "audio4.mp3", "audio5.mp3"];
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const audioPath = audioFolder + audioFiles[randomIndex];
  const audioElement = new Audio(audioPath);
  audioElement.play();
}

function createFallingCifrao() {
  const cifrao = document.createElement("div");
  cifrao.className = "cifrao";
  cifrao.textContent = "$";
  cifrao.style.left = Math.random() * window.innerWidth + "px";
  cifraoContainer.appendChild(cifrao);

  const animationDuration = Math.random() * 3 + 2;
  const fontSize = Math.random() * 100 + 25; // Tamanhos de fonte variados
  cifrao.style.fontSize = fontSize + "px";
  cifrao.style.animation = `fall ${animationDuration}s linear`;

  cifrao.addEventListener("animationend", () => {
    cifrao.remove();
  });
}
