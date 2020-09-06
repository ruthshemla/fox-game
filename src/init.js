import game, { handleUserAction } from "./gameState";
import initButtons from "./buttons";
import { TICK_RATE } from "./constants";

// change tick()
game.tick();

async function init() {
  console.log("starting game");
  initButtons(handleUserAction);
  let nextTimetoTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimetoTick <= now) {
      game.tick();
      nextTimetoTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  nextAnimationFrame();
}

init();
