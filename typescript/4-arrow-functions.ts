(function () {
  let myFunction = function (a: string) {
    return a.toUpperCase();
  };

  let myArrowFunction = (a: string) => a.toUpperCase();

  console.log(myFunction("Normal"));
  console.log(myArrowFunction("Flecha"));

  let sumN = function (a: number, b: number) {
    return a + b;
  };

  let sumArrowN = (a: number, b: number) => a + b;

  console.log(`Normal: ${sumN(14, 6)}`);
  console.log(`Flecha: ${sumArrowN(20, 4)}`);

  let hulk = {
    name: "Hulk",
    smash() {
      setTimeout(() => {
        console.log(`${this.name} smashhh again!!`);
      }, 1000);
      console.log(`${this.name} smashhh!!`);
    },
  };

  hulk.smash();
})();
