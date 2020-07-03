(function () {
  function activate(who: string, moment?: string, object: string = "truco") {
    if (moment) {
      console.log(`${who} activó un ${object} a la ${moment}`);
    } else {
      console.log(`${who} activó un ${object}`);
    }
  }

  activate("Gordon", "tarde");
})();
