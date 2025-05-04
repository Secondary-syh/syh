document.addEventListener("DOMContentLoaded", () => {
    const countdownEl = document.querySelector(".countdown");
    const giftScreen = document.querySelector(".gift-screen");
    const giftBox = document.querySelector(".gift-box");
    const cardContainer = document.querySelector(".card-container");
    const music = document.getElementById("music");
    const playBtn = document.getElementById("playMusic");
    const stopBtn = document.getElementById("stopMusic");
  
    let count = 3;
  
    const countdownInterval = setInterval(() => {
      countdownEl.textContent = count;
      count--;
      if (count < 0) {
        clearInterval(countdownInterval);
        countdownEl.textContent = "Selamat Ulang Tahun!";
        giftBox.classList.add("active");
      }
    }, 1000);
  
    giftBox.addEventListener("click", () => {
      if (count < 0) {
        giftScreen.style.display = "none";
        cardContainer.classList.remove("hidden");
      }
    });
  
    // Modal
    const modal = document.getElementById("photoModal");
    const emoji = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close");
  
    emoji.addEventListener("click", () => {
      modal.style.display = "block";
      generateHearts();
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Love explosion
    function generateHearts() {
      const loveContainer = document.querySelector(".love-container");
  
      const interval = setInterval(() => {
        if (modal.style.display !== "block") {
          clearInterval(interval);
          return;
        }
  
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.setProperty('--x', `${(Math.random() - 0.5) * 200}px`);
        heart.style.setProperty('--y', `${(Math.random() - 0.5) * 200}px`);
        loveContainer.appendChild(heart);
  
        setTimeout(() => {
          heart.remove();
        }, 1000);
      }, 200);
    }
  
    // Music
    playBtn.addEventListener("click", () => {
      music.play();
    });
  
    stopBtn.addEventListener("click", () => {
      music.pause();
      music.currentTime = 0;
    });
  });
  