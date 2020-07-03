(() => {
  // Define type of argument Promise as number
  const withdrawMoney = (qty: number): Promise<number> => {
    let currentQty = 1000;

    return new Promise((resolve, reject) => {
      if (qty > currentQty) {
        reject("No hay suficientes fondos");
      } else {
        // currentQty = currentQty - qty;
        // It's the same as follows
        currentQty -= qty;
        resolve(currentQty);
      }
    });
  };

  withdrawMoney(854)
    .then((currentQty) => console.log(`Me queda ${currentQty}`))
    .catch(console.error); // It's the same as: err => console.error(err)
})();
