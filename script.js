
/* =========================
   SCROLL REVEAL SYSTEM
========================= */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* =========================
   EMAIL CAPTURE (STATIC SAFE)
========================= */
document.getElementById("emailForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("emailInput").value;

  // local storage (GitHub Pages safe)
  localStorage.setItem("yeetfoot_email", email);

  alert("Request received — EPK access logged.");
});

/* =========================
   CANVAS SETUP (FIXED DESKTOP)
========================= */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

/* =========================
   ANIMATED WAVEFORM ENGINE
   (pseudo-audio reactive)
========================= */

let t = 0;

function drawWaveform() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const width = canvas.width;
  const height = canvas.height;

  const bars = 170;
  const spacing = width / bars;

  for (let i = 0; i < bars; i++) {

    // smooth layered sine motion = “audio feel”
    const wave =
      Math.sin(i * 0.12 + t) * 0.6 +
      Math.sin(i * 0.04 + t * 1.4) * 0.4;

    const barHeight = (wave + 1) * 70;

    const x = i * spacing;
    const y = height / 2 - barHeight / 2;

    ctx.fillStyle = "rgba(255,255,255,0.035)";
    ctx.fillRect(x, y, spacing * 0.6, barHeight);
  }

  t += 0.025;
  requestAnimationFrame(drawWaveform);
}

drawWaveform();
