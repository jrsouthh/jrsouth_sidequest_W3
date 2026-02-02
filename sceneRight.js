// sceneRight.js
// Chocolate path: you get super speed
// Choices: run to the freezer (win) OR stay eating (lose)

function drawSceneRight() {
  background(210, 230, 255); // cooler, energetic
  // cool blue-ish

  fill(40, 60, 70);
  textAlign(CENTER, CENTER);

  textSize(34);
  text("Chocolate Power!", width / 2, 140);

  textSize(18);
  text(
    "The CHOCOLATE magic surges through you!\n" +
      "Your legs blur — you have SUPER SPEED!",
    width / 2,
    220,
  );

  const freezerBtn = {
    x: width / 2,
    y: 450,
    w: 360,
    h: 80,
    label: "Run to the freezer",
  };

  const eatBtn = {
    x: width / 2,
    y: 560,
    w: 360,
    h: 80,
    label: "Stay eating forever",
  };

  drawButton(freezerBtn);
  drawButton(eatBtn);

  cursor(isHover(freezerBtn) || isHover(eatBtn) ? HAND : ARROW);

  textSize(14);
  fill(60);
  text("Tip: Press F (freezer) or E (eat)", width / 2, 660);
}

function sceneRightMousePressed() {
  const freezerBtn = { x: width / 2, y: 450, w: 360, h: 80 };
  const eatBtn = { x: width / 2, y: 560, w: 360, h: 80 };

  if (isHover(freezerBtn)) currentScreen = "win";
  else if (isHover(eatBtn)) currentScreen = "lose";
}

function sceneRightKeyPressed() {
  if (key === "f" || key === "F") currentScreen = "win";
  if (key === "e" || key === "E") currentScreen = "lose";

  // Optional: go back one step
  if (keyCode === BACKSPACE) currentScreen = "scene1";
}
