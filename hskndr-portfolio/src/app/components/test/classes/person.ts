export class PersonClass {
  // Atributes
  namePerson: string;

  // Constructor
  constructor(newName: string) {
    this.namePerson = newName;
    console.log('This is Person Constructor');
  }

  // Methods
  personRun() {
    console.log(this.namePerson, ' is a Person running');
  }
  // End class
}
