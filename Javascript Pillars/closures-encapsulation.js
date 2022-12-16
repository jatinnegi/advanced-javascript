// Memory Efficient
function heavyDuty(index) {
  const bigArray = new Array(7000).fill("😃");
  console.log("created!");
  return bigArray[index];
}

// console.log(heavyDuty(688));
// console.log(heavyDuty(688));
// console.log(heavyDuty(688));

const getHeavyDuty = heavyDuty2();
console.log(getHeavyDuty(688));
console.log(getHeavyDuty(700));
console.log(getHeavyDuty(800));

function heavyDuty2() {
  const bigArray = new Array(7000).fill("😃");
  console.log("Created Again!");
  return function (index) {
    return bigArray[index];
  };
}

// Encapsulation
const makeNuclearButton = () => {
  let timeWithoutDesctruction = 0;
  const passTime = () => timeWithoutDesctruction++;
  const totalPeaceTime = () => timeWithoutDesctruction;
  const launch = () => {
    timeWithoutDesctruction = -1;
    return "💥";
  };
  setInterval(passTime, 1000);

  return {
    totalPeaceTime,
  };
};

const ohno = makeNuclearButton();
ohno.launch();
