Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

const year = new Date("2020-10-10").lastYear();
// console.log(year);

Array.prototype.map = function () {
  let printMessage = "";

  for (let i = 0; i < this.length; i++) printMessage += `${this[i]}🗺️ `;

  console.log(printMessage.trim());
};

[1, 2, 3].map();
