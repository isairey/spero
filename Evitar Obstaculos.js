orb.connect(() => {
  function randomMove() {
    let direction = Math.random() * 360;
    orb.roll(80, direction);
  }

  setInterval(randomMove, 1500);
});
