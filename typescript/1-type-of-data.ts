(function () {
  let message: string = "Hola";
  let number: number = 123;
  let boolean: boolean = true;
  let now: Date = new Date();

  message = "123";
  number = 123;

  let anything: string | number | Date;
  anything = message;
  anything = number;
  anything = now;

  let spiderman = {
    name: "Peter",
    age: 30,
  };

  spiderman = {
    name: "Parker",
    age: 20,
  };
})();
