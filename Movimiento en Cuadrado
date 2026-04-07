orb.connect(() => {
  let directions = [0, 90, 180, 270];
  let i = 0;

  function moveSquare() {
    if (i >= directions.length) return;

    orb.roll(80, directions[i]);
    setTimeout(() => {
      orb.stop();
      i++;
      setTimeout(moveSquare, 500);
    }, 1000);
  }

  moveSquare();
});
