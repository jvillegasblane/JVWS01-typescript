(() => {
  const avenger = {
    name: "Steve",
    code: "Capitán America",
    power: "Droga",
  };

  // Extract normally
  //   const { name, power } = avenger;
  //   console.log(name);
  //   console.log(power);

  // Exctract with destructuring object
  const extractAvenger = ({ name, power }: any) => {
    console.log(name);
    console.log(power);
    console.log("\n");
  };

  extractAvenger(avenger);

  const avengers: string[] = ["Thor", "Ironman", "Spiderman"];

  // It's a way to define positions with ',' that we don't need, only spider
  //   const [, , spider] = avengers;
  //   console.log(spider);

  // Deconstruct object indide a function normal way
  const extractAvengersNormal = (avengers: string[]) => {
    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);
    console.log("\n");
  };

  extractAvengersNormal(avengers);

  // Deconstruct object inside a function in a nice and readable way
  const extractAvengersNice = ([, ironman, spider]: string[]) => {
    console.log(ironman);
    console.log(spider);
  };

  extractAvengersNice(avengers);
})();
