// sceneLeft.js
// Strawberry path: you shrink to sprinkle size
// Choices: ride whipped cream (win) OR jump in syrup (lose)

function drawSceneLeft() {
  background(255, 245, 230); // warm vanilla-ish

  fill(40, 60, 70);
  textAlign(CENTER, CENTER);

  textSize(34);
  text("Strawberry Magic!", width / 2, 140);

  textSize(18);
  text(
    "The STRAWBERRY magic kicks in!\n" +
      "Your body shrinks smaller… smaller…\n" +
      "You’re now sprinkle-sized!",
    width / 2,
    220,
  );

  const whipBtn = {
    x: width / 2,
    y: 450,
    w: 520,
    h: 80,
    label: "Ride the whipped cream (WIN)",
  };
  const syrupBtn = {
    x: width / 2,
    y: 560,
    w: 520,
    h: 80,
    label: "Jump into syrup (LOSE)",
  };

  drawButton(whipBtn);
  drawButton(syrupBtn);

  cursor(isHover(whipBtn) || isHover(syrupBtn) ? HAND : ARROW);

  textSize(14);
  fill(60);
  text("Tip: Press W (whipped cream) or S (syrup)", width / 2, 660);
}

function sceneLeftMousePressed() {
  const whipBtn = { x: width / 2, y: 450, w: 360, h: 80 };
  const syrupBtn = { x: width / 2, y: 560, w: 360, h: 80 };

  if (isHover(whipBtn)) currentScreen = "win";
  else if (isHover(syrupBtn)) currentScreen = "lose";
}

function sceneLeftKeyPressed() {
  if (key === "w" || key === "W") currentScreen = "win";
  if (key === "s" || key === "S") currentScreen = "lose";

  // Optional: go back one step
  if (keyCode === BACKSPACE) currentScreen = "scene1";
}
