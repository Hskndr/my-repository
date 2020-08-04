import { PersonClass } from './person';

export class NinjaClass extends PersonClass {
  // Atributes
  village: string;

  // Constructor
  constructor(newName: string, newVillage: string) {
    super(newName);
    this.village = newVillage;
    console.log('This is Ninja Constructor');
  }

  // Methods
  infoNinja() {
    console.log( 'is a ninja from ', this.village);
  }

  // End class
}
