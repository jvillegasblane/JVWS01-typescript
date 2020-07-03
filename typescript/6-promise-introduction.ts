(() => {
  console.log("Init");

  // In angular there isn't any error, but in typescript, it's a need to change version of
  // es5 to es6 on the tsconfig.json, because promises were implemented on ecmascript6
  const promise1 = new Promise((resolve, reject) => {
    // resolve: exit case
    // setTimeout(() => {
    //   resolve("Se terminó el timeout");
    // }, 500);

    // reject: failure case
    setTimeout(() => {
      reject("Error en promise");
    }, 1000);
  });

  promise1
    .then((message) => console.log(message))
    .catch((err) => console.error(err));

  console.log("Final");
})();
