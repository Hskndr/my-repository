import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent implements OnInit {

  // test rective forms
  name = new FormControl('');

  // form Group
  heroForm = new FormGroup({
    heroName: new FormControl(''),
    heroLastName: new FormControl(''),
  });

  // nested Group
  /*   narutoForm = new FormGroup({
      narutoName: new FormControl(''),
      narutoLastName: new FormControl(''),
      narutoAddress: new FormGroup({
        addressStreet: new FormControl(''),
        addressVillage: new FormControl(''),
      }),
    }); */

  // Other nested form
  narutoForm = this.fb.group({
    narutoName: ['', Validators.required],
    narutoLastName: [''],
    narutoAddress: this.fb.group({
      addressStreet: [''],
      addressVillage: [''],
    }),
    // Add Aliases
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  // reactive forms
  updateName() {
    this.name.setValue('popillo');
  }

  // FormGroup
  onSubmitHero() {
    console.warn(this.heroForm.value);
  }

  // nested Group
  onSubmitNaruto() {
    console.warn(this.narutoForm.value);
  }

  // Update to Sasuke
  updateSasuke() {
    this.narutoForm.patchValue({
      narutoName: 'Sasuke',
      narutoAddress: {
        addressStreet: 'Kakashi home'
      }
    });
    console.warn(this.narutoForm.value);
  }

  // arrayform
  get aliases() {
    return this.narutoForm.get('aliases') as FormArray;
  }
  // add Alias
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  // End Class
}
