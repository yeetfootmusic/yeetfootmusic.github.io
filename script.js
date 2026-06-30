// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


// EMAIL CAPTURE (demo - stores locally)
document.getElementById("emailForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;
  localStorage.setItem("epk_email", email);
  alert("Request received. EPK access logged.");
});


// AUDIO-REACTIVE BACKGROUND (procedural motion)
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  for (let i = 0; i < 120; i++) {
    const x = i * 10;
    const y = canvas.height/2 + Math.sin(i * 0.2 + t) * 40;

    ctx.fillStyle = "rgba(255,255,255,0.03)";
    ctx.fillRect(x, y, 2, 2);
  }

  t += 0.03;
  requestAnimationFrame(animate);
}

animate();
