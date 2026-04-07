const sphero = require("sphero");

// Reemplaza con tu puerto Bluetooth
const orb = sphero("COM5"); // Windows
// const orb = sphero("/dev/tty.Sphero-XXX"); // Mac/Linux

orb.connect(() => {
  console.log("Conectado a Sphero");

  // Encender LED azul
  orb.color("blue");

  // Mover hacia adelante
  orb.roll(60, 0); // velocidad, dirección

  setTimeout(() => {
    orb.stop();
  }, 2000);
});
