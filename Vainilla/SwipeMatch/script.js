let isAnimating = false;
let pullDeltaX = 0; // Distancia de la carta

function startDrag(e) {
  if (isAnimating) return;

  // get the first artcile element
  const actualCard = e.target.closest("article");

  // get initial position of mouse "pageX"
  const startX = e.pageX ?? e.touches[0].pageX;

  // listen the mouse and touch mevements
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", onEnd);

  document.addEventListener("touchmove", onMove, { passive: true });
  document.addEventListener("touchend", onEnd, { passive: true });

  function onMove(e) {
    // current position
    const currentX = e.pageX ?? e.touches[0].pageX;

    console.log(currentX);

    // the distance between the initial and current position
    pullDeltaX = currentX - startX;
    // the distance initial is 0
    if (pullDeltaX === 0) return;
    // change the flag to indicate we are animating
    isAnimating = true;
    // calculate the rotation of the card using the distance
    const deg = pullDeltaX / 10;
    // apply the transformation to the card
    actualCard.style.transform = `translateX(${pullDeltaX}px) rotate(${deg}deg)`;
    // change the cursor to grabbing
    actualCard.style.cursor = "grabbing";
  }

  function onEnd(e) {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onEndremove);

    document.removeEventListener("touchmove", onMove);
    document.removeEventListener("touchend", onEnd);

    isAnimating = false;

    pullDeltaX = 0;

    actualCard.style.transform = "none";

    actualCard.style.cursor = "grab";
  }
}

document.addEventListener("mousedown", startDrag);
document.addEventListener("touchstart", startDrag, { passive: true });
