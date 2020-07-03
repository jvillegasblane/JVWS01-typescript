(function () {
  const name = "Jonathan";
  const age = 23;
  const surname = "Villegas";

  function getAge() {
    return 23 + 5;
  }

  // I want to create this output >> Jonathan Villegas (Edad: 23)
  // Typical example with variables.
  let output = name + " " + surname + " (Edad: " + age + ")";
  console.log(output);

  // Example with back ticks, more readable
  const outputBackTicks = `
    ${name}
    ${surname}
    (Edad: ${getAge()})`;
  console.log(outputBackTicks);
})();
