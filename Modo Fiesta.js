orb.connect(() => {
  let colors = ["red", "blue", "green", "yellow", "purple"];
  let i = 0;

  setInterval(() => {
    orb.color(colors[i % colors.length]);
    orb.roll(100, Math.random() * 360);
    i++;
  }, 500);
});
