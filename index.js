const heroVideo = document.querySelector(".hero-video");
const content = document.querySelector(".hero-cont");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  heroVideo.style.transform = `translateY(${scrollY * 0.3}px) scale(1.1)`;
  content.style.transform = `translateY(${scrollY * -0.1}px)`;
});

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let endTime = localStorage.getItem("saleEnd");

if (!endTime) {
  endTime = Date.now() + 7 * 24 * 60 * 60 * 1000;
  localStorage.setItem("saleEnd", endTime);
}

function updateCountdown() {
  const now = Date.now();
  const distance = endTime - now;

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);
