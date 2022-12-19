const promisify = (item, delay) =>
  new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(item);
    }, delay);
  });

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

// a().then(console.log);
// b().then(console.log);
// c().then(console.log);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);

  return `Parallel is done: ${output1} ${output2} ${output3}`;
}

// console.log(parallel().then(console.log));

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);

  return `Race is done: ${output1}`;
}

// race().then(console.log);

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();

  return `Sequence is done ${output1} ${output2} ${output3}`;
}

race().then(console.log); // 100ms
parallel().then(console.log); // 5000ms
sequence().then(console.log); // 8100ms
