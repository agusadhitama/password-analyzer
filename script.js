// ==============================
// CYBER PASSWORD ANALYZER PRO JS
// ==============================

// ==============================
// ELEMENTS
// ==============================
const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength");
const strengthText = document.getElementById("strength-text");
const generatedInput = document.getElementById("generated");

// ==============================
// PASSWORD STRENGTH CHECKER
// ==============================
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let score = 0;
  if (password.length > 6) score++;
  if (password.length > 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  updateUI(score);
});

function updateUI(score) {
  const colors = ["red", "orange", "yellow", "lime", "cyan"];
  const texts = ["Very Weak 😭", "Weak 😢", "Medium 😐", "Strong 💪", "Hacker Level 🧠"];
  strengthBar.style.width = (score * 20) + "%";
  strengthBar.style.background = colors[score];
  strengthText.textContent = texts[score];
  console.log(`%c Password Score: ${score}/5`, `color:${colors[score]}; font-weight:bold`);
}

// ==============================
// PASSWORD GENERATOR WITH ANIMATION
// ==============================
function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";
  const length = 14 + Math.floor(Math.random() * 5); // 14-18 chars

  let i = 0;
  generatedInput.value = "";
  const interval = setInterval(() => {
    if (i < length) {
      password += chars[Math.floor(Math.random() * chars.length)];
      generatedInput.value = password;
      i++;
    } else {
      clearInterval(interval);
      animateCopyHint();
    }
  }, 50);
}

// ==============================
// COPY TO CLIPBOARD
// ==============================
function copyPassword() {
  if (!generatedInput.value) return alert("Generate a password first!");
  generatedInput.select();
  document.execCommand("copy");
  alert("Copied! 🔥");
}

// ==============================
// COPY BUTTON PULSE ANIMATION
// ==============================
function animateCopyHint() {
  const btn = document.querySelector(".copy-btn");
  btn.classList.add("pulse");
  setTimeout(() => btn.classList.remove("pulse"), 1000);
}

// ==============================
// HACKER CONSOLE LOGS
// ==============================
function hackerLog() {
  const logs = [
    "Initializing security modules...",
    "Scanning network ports...",
    "Encrypting password...",
    "Analyzing password strength...",
    "Bypassing firewall...",
    "Access granted ✔",
    "Access denied ✖"
  ];
  const log = logs[Math.floor(Math.random() * logs.length)];
  console.log(`%c${log}`, "color:cyan");
}
setInterval(hackerLog, 2500);

// ==============================
// PARTICLE BACKGROUND
// ==============================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particlesArray = [];
let mouse = { x: null, y: null };

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
    if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

    // Mouse interaction
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    if (distance < 100) {
      this.x -= dx/20;
      this.y -= dy/20;
    }
  }
  draw() {
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  const number = Math.floor(canvas.width/10);
  for (let i = 0; i < number; i++) {
    let size = Math.random()*3 + 1;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speedX = (Math.random() - 0.5) * 1.5;
    let speedY = (Math.random() - 0.5) * 1.5;
    particlesArray.push(new Particle(x, y, size, speedX, speedY));
  }
}
initParticles();

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  connectParticles();
  requestAnimationFrame(animateParticles);
}

function connectParticles() {
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let dx = particlesArray[a].x - particlesArray[b].x;
      let dy = particlesArray[a].y - particlesArray[b].y;
      let distance = Math.sqrt(dx*dx + dy*dy);
      if (distance < 120) {
        ctx.strokeStyle = `rgba(0,255,255,${1 - distance/120})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}
animateParticles();

// ==============================
// OPTIONAL: HACKER TYPING EFFECT
// ==============================
function hackerTypingEffect(text, speed=50){
  let i=0;
  const interval = setInterval(()=>{
    if(i<text.length){
      console.log(`%c${text.slice(0,i+1)}`, "color:lime");
      i++;
    }else clearInterval(interval);
  }, speed);
}
hackerTypingEffect("System initialized... ✔");
hackerTypingEffect("Cyber Password Analyzer online... ✔");