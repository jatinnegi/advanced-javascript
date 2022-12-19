// Global Scope
// Module Scope
// Function Scope
// Block Scope - let and const

var fightModule = (function () {
  var harry = "Potter";
  var voldermort = "He who must not be named";

  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);

    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }

  return {
    fight,
  };
})();

// console.log(fightModule.fight("Ron", "Hagrid"));
