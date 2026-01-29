// scene1.js
// Choice: Strawberry vs Chocolate

function drawScene1() {
  background(250, 235, 245); // light pink-ish

  fill(40, 60, 70);
  textAlign(CENTER, CENTER);

  textSize(34);
  text("A Magical Ice Cream Shop Appears…", width / 2, 150);

  textSize(18);
  text(
    "It’s midnight. The door creaks open.\nPick a flavour to begin your adventure.",
    width / 2,
    230,
  );

  const strawberryBtn = {
    x: width / 2,
    y: 420,
    w: 320,
    h: 80,
    label: "A) STRAWBERRY 🍓",
  };

  const chocolateBtn = {
    x: width / 2,
    y: 530,
    w: 320,
    h: 80,
    label: "B) CHOCOLATE 🍫",
  };

  drawButton(strawberryBtn);
  drawButton(chocolateBtn);

  // Cursor feedback
  const over = isHover(strawberryBtn) || isHover(chocolateBtn);
  cursor(over ? HAND : ARROW);

  // Small hint (keyboard)
  textSize(14);
  fill(60);
  text("Tip: Press A or B", width / 2, 640);
}

function scene1MousePressed() {
  const strawberryBtn = { x: width / 2, y: 420, w: 320, h: 80 };
  const chocolateBtn = { x: width / 2, y: 530, w: 320, h: 80 };

  if (isHover(strawberryBtn)) currentScreen = "left";
  else if (isHover(chocolateBtn)) currentScreen = "right";
}

function scene1KeyPressed() {
  if (key === "a" || key === "A") currentScreen = "left";
  if (key === "b" || key === "B") currentScreen = "right";

  // Optional: ESC to return to start
  if (keyCode === ESCAPE) currentScreen = "start";
}
