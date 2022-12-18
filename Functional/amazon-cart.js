// Amazon shopping
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

let amazonHistory = [];

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

console.log(
  purchaseItem(
    addItemToCart,
    applyTaxToItems
    // buyItem,
    // emptyCart
  )(user, { name: "Laptop", price: 200 })
);

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  amazonHistory.push(user);
  return Object.assign({}, user, { cart: user.cart.concat(item) });
}

function applyTaxToItems(user) {
  amazonHistory.push(user);
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  console.log(updatedCart);
  return {
    ...user,
    cart: updatedCart,
  };
}

function buyItem(user) {
  amazonHistory.push(user);
  return {
    ...user,
    purchases: user.cart,
  };
}

function emptyCart(user) {
  amazonHistory.push(user);
  return {
    ...user,
    cart: [],
  };
}
