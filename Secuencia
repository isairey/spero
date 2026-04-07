orb.connect(() => {
  async function sequence() {
    orb.color("blue");
    orb.roll(60, 0);

    setTimeout(() => {
      orb.roll(60, 90);
    }, 1500);

    setTimeout(() => {
      orb.color("red");
      orb.roll(60, 180);
    }, 3000);

    setTimeout(() => {
      orb.stop();
      orb.color("white");
    }, 4500);
  }

  sequence();
});
