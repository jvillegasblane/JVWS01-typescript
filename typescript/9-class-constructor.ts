(() => {
  class Avenger {
    // name: string;
    // team: string;
    // realName: string;
    // canFight?: boolean;
    // wonFights?: number;

    // Typical way to create a class constructor
    // constructor(name: string, team: string, realName: string) {
    //     this.name = name;
    //     this.team = team;
    //     this.realName = realName;
    // }

    constructor(
      public name: string,
      public team: string,
      public realName?: string,
      public canFight: boolean = true,
      public wonFights: number = 0
    ) {}
  }

  let antman = new Avenger("antman", "capitán");

  console.log(antman);
})();
