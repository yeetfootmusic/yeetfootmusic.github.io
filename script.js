
/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });

  triggerAboutAnimation();
});

/* EMAIL CAPTURE */
document.getElementById("emailForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;
  localStorage.setItem("yeetfoot_email", email);
  alert("Request received — EPK access logged.");
});

/* CANVAS SETUP */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

/* WAVEFORM ANIMATION */
let t = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const bars = 180;
  const w = canvas.width / bars;

  for (let i = 0; i < bars; i++) {
    const wave =
      Math.sin(i * 0.12 + t) +
      Math.sin(i * 0.05 + t * 1.3);

    const h = (wave + 2) * 40;

    ctx.fillStyle = "rgba(255,255,255,0.03)";
    ctx.fillRect(i * w, canvas.height / 2 - h / 2, w * 0.6, h);
  }

  t += 0.03;
  requestAnimationFrame(draw);
}

draw();

/* ABOUT WORD ANIMATION */
function triggerAboutAnimation() {
  const el = document.getElementById("aboutText");
  if (!el || el.dataset.done) return;

  const words = el.innerText.split(" ");
  el.innerHTML = "";

  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.className = "about-word";
    span.textContent = word + " ";
    el.appendChild(span);

    setTimeout(() => {
      span.classList.add("show");
    }, i * 80);
  });

  el.dataset.done = "true";
}
