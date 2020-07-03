(() => {
  // This is an untanable position, everytime we need to change a message on different
  // functions we need to specify parameters each time.
  const sendMissionUntanable = (xmen: { name: string; age: number }) => {
    console.log(`Enviando a ${xmen.name} a la misión con edad ${xmen.age}`);
  };

  const returnHeadquartersUntanable = (xmen: { name: string; age: number }) => {
    console.log(`Retornando a ${xmen.name} a los cuarteles generales`);
  };

  const wolverineUntanable = {
    name: "Logan",
    age: 60,
  };

  sendMissionUntanable(wolverineUntanable);
  returnHeadquartersUntanable(wolverineUntanable);
  console.log("--------------------------------------- \n");

  // That's why, we create an interface
  interface Xmen {
    name: string;
    age: number;
    power?: string; //optional '?'
  }

  const sendMission = (xmen: Xmen) => {
    console.log(`Enviando a ${xmen.name} a la misión con edad ${xmen.age}`);
  };

  const returnHeadquarters = (xmen: Xmen) => {
    console.log(`Retornando a ${xmen.name} a los cuarteles generales`);
  };

  const wolverine: Xmen = {
    name: "Logan",
    age: 60
  };

  sendMission(wolverine);
  returnHeadquarters(wolverine);
})();
