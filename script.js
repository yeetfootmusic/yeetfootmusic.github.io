
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

  triggerAboutAnimation();
});

/* =========================
   EMAIL CAPTURE (STATIC SAFE)
========================= */
document.getElementById("emailForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("emailInput").value;

  localStorage.setItem("yeetfoot_email", email);

  alert("Request received — EPK access logged.");
});

/* =========================
   CANVAS WAVEFORM BACKGROUND
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

    const height = (wave + 2) * 40;

    ctx.fillStyle = "rgba(255,255,255,0.03)";
    ctx.fillRect(
      i * barWidth,
      canvas.height / 2 - height / 2,
      barWidth * 0.6,
      height
    );
  }

  t += 0.03;
  requestAnimationFrame(draw);
}

draw();

/* =========================
   CLEAN ABOUT ANIMATION
   (NO WORD SPLITTING BUGS)
========================= */
function triggerAboutAnimation() {
  const el = document.getElementById("aboutText");
  if (!el || el.dataset.done) return;

  const text = el.innerText;

  el.innerHTML = "";

/* create a single animated block */
  const span = document.createElement("span");
  span.className = "about-line";
  span.textContent = text;

  el.appendChild(span);

  setTimeout(() => {
    span.classList.add("show");
  }, 300);

  el.dataset.done = "true";
}
