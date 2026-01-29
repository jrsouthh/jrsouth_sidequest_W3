// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"

// ------------------------------------------------------------
// Confetti (WIN screen only)
// ------------------------------------------------------------

// Stores all falling pieces
let confettiPieces = [];

// Used so we can reset the confetti when we enter the win screen
let wasOnWinScreen = false;

// Make 1 piece
function spawnConfettiPiece() {
  confettiPieces.push({
    x: random(width),
    y: random(-40, -10),
    vx: random(-1.2, 1.2),
    vy: random(1, 3),
    size: random(6, 14),
    rot: random(TWO_PI),
    rotSpeed: random(-0.15, 0.15),
    // simple random bright-ish color
    c: color(random(80, 255), random(80, 255), random(80, 255), 220),
    // randomly choose a shape style
    shape: random() < 0.5 ? "rect" : "ellipse",
  });
}

function drawWin() {
  // Detect "just entered" the win screen and reset confetti once
  if (!wasOnWinScreen) {
    confettiPieces = []; // clear old confetti
    wasOnWinScreen = true; // mark that we are now on win
  }

  // Green-tinted background to communicate success
  background(200, 255, 200);

  // ------------------------------
  // 1) Spawn a few pieces each frame
  // ------------------------------
  for (let i = 0; i < 4; i++) {
    spawnConfettiPiece();
  }

  // ------------------------------
  // 2) Update + draw all pieces
  // ------------------------------
  for (let i = confettiPieces.length - 1; i >= 0; i--) {
    const p = confettiPieces[i];

    // gravity
    p.vy += 0.06;

    // movement
    p.x += p.vx;
    p.y += p.vy;

    // spin
    p.rot += p.rotSpeed;

    // wrap horizontally so pieces don't disappear off sides
    if (p.x < -20) p.x = width + 20;
    if (p.x > width + 20) p.x = -20;

    // draw
    push();
    translate(p.x, p.y);
    rotate(p.rot);
    noStroke();
    fill(p.c);

    if (p.shape === "rect") {
      rectMode(CENTER);
      rect(0, 0, p.size, p.size * 0.6, 2);
    } else {
      ellipse(0, 0, p.size, p.size);
    }
    pop();

    // remove if off screen (keeps array from growing forever)
    if (p.y > height + 30) {
      confettiPieces.splice(i, 1);
    }
  }

  // ------------------------------
  // 3) Your existing win text on top
  // ------------------------------
  fill(0);
  textAlign(CENTER, CENTER);

  textSize(40);
  text("You Win!", width / 2, 300);

  textSize(20);
  text("Click or press R to return to Start.", width / 2, 360);
}

function winMousePressed() {
  wasOnWinScreen = false;
  currentScreen = "scene1";
}

function winKeyPressed() {
  if (key === "r" || key === "R") {
    wasOnWinScreen = false;
    currentScreen = "scene1";
  }
}
