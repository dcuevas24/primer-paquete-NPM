const messages = [
  "Daniel",
  "Oscar",
  "Laura",
  "Marcela",
  "Santiago",
  "Ana",
  "Carolina",
  "Paulina",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];

  console.log(message);
};

module.exports = { randomMsg };
