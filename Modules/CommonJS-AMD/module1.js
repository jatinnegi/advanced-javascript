function fight(char1, char2) {
  var attack1 = Math.floor(Math.random() * char1.length);
  var attack2 = Math.floor(Math.random() * char2.length);

  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}

module.exports = { fight };
