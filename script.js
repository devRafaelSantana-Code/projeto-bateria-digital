const inputElement = document.querySelector("#input");
const playButton = document.querySelector("#btn-play");
const keysContainer = document.querySelector(".keys");

document.body.addEventListener("keyup", (event) => {
   if (document.activeElement === inputElement) return;

   playSound(event.code.toLowerCase());
});

keysContainer.addEventListener("click", (event) => {
   const keyElement = event.target.closest(".key");
   if (!keyElement) return;

   const clickedKey = keyElement.getAttribute("data-key");
   playSound(clickedKey);
});

playButton.addEventListener("click", () => {
   const song = inputElement.value.trim();

   if (song) {
      const songArray = song.split("");
      playComposition(songArray);
      inputElement.value = "";
   }
});

inputElement.addEventListener("keypress", (event) => {
   if (event.key === "Enter") {
      playButton.click();
   }
});

function playSound(sound) {
   const audioElement = document.querySelector(`#s_${sound}`);
   const keyElement = document.querySelector(`button[data-key="${sound}"]`);

   if (audioElement) {
      audioElement.currentTime = 0;
      audioElement
         .play()
         .catch((err) => console.log("Áudio ainda não carregado:", err));
   }

   if (keyElement) {
      keyElement.classList.add("active");

      keyElement.addEventListener(
         "animationend",
         () => {
            keyElement.classList.remove("active");
         },
         { once: true },
      );
   }
}

function playComposition(songArray) {
   let wait = 0;
   const tempoInterval = 250;

   for (const songItem of songArray) {
      if (songItem === " ") {
         wait += tempoInterval;
         continue;
      }

      setTimeout(() => {
         playSound(`key${songItem.toLowerCase()}`);
      }, wait);

      wait += tempoInterval;
   }
}
