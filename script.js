
/* =========================
   SCROLL REVEAL
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
   ABOUT ANIMATION (FIXED + RELIABLE)
========================= */
const about = document.getElementById("aboutText");

function triggerAbout() {
  if (!about) return;

  const rect = about.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.85) {
    about.classList.add("show");
  }
}

/* ensures it always triggers */
window.addEventListener("scroll", triggerAbout);
window.addEventListener("load", triggerAbout);
triggerAbout();

/* =========================
   EMAIL CAPTURE
========================= */
document.getElementById("emailForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("emailInput").value;
  localStorage.setItem("yeetfoot_email", email);

  alert("Request received — EPK access logged.");
});

/* =========================
   WAVEFORM BACKGROUND
========================= */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

let t = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const bars = 180;
  const barWidth = canvas.width / bars;

  for (let i = 0; i < bars; i++) {
    const wave =
      Math.sin(i * 0.12 + t) +
      Math.sin(i * 0.05 + t * 1.3);

    const h = (wave + 2) * 40;

    ctx.fillStyle = "rgba(255,255,255,0.03)";
    ctx.fillRect(
      i * barWidth,
      canvas.height / 2 - h / 2,
      barWidth * 0.6,
      h
    );
  }

  t += 0.03;
  requestAnimationFrame(draw);
}

draw();
