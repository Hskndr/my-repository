import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer-budget',
  templateUrl: './transfer-budget.component.html',
  styleUrls: ['./transfer-budget.component.css']
})
export class TransferBudgetComponent implements OnInit {
  // Transfer Form
  public transferForm = this.fb.group({
    point0to1: ['', Validators.required], // punto0APuntoCarga
    point1to2: ['', Validators.required], // puntoCargaAPuntoDescarga
    point2to0: ['', Validators.required], // puntoDescargaAPunto0
    quantity: ['',  Validators.max(2)],
  });

  // Budget
  price0to1 = 0;
  price1to2 = 0;
  price2to0 = 0;
  priceAdSvc = 0;
  totalPrice = 0;
  tolls = 0;
  // Price transfer
  distanceBaseService = 5;
  transferPrice = 10;
  servicePrice = 700;
  kmExtraService = 50;
  tollsPrice = 100;


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onTransfer() {
    // Get one field of form
    // this.transferForm.get('point1to2').value

    // atributes
    // Number Services
    let quantityServices = this.transferForm.get('quantity').value;
    // Kilometers
    let kmServices = this.transferQuantity(quantityServices);
    // Distance between Home to first point
    let homeFirstPoint = this.transferForm.get('point0to1').value;
    // Distance first point to second point
    let firstToSecondPoint = this.transferForm.get('point1to2').value;
    // Distance Second point to home
    let secondPointToHome = this.transferForm.get('point2to0').value;

    // price 0 to 1
    if (homeFirstPoint > this.transferPrice) {
      this.price0to1 = homeFirstPoint * this.transferPrice;
    } else { this.price0to1 = null; }

    // price 1 to 2
    if (firstToSecondPoint > this.distanceBaseService) {
      let kmExxtra = firstToSecondPoint - this.distanceBaseService;
      this.price1to2 = (kmExxtra * this.kmExtraService) + this.servicePrice;
    } else { this.price1to2 = this.servicePrice; }

    // price 2 to 0
    if (secondPointToHome > this.transferPrice) {
      this.price2to0 = secondPointToHome * this.transferPrice;
    } else { this.price2to0 = null; }

    // Aditional Service
    if (quantityServices > 1 && kmServices < this.distanceBaseService) {
      this.priceAdSvc = 0;
    } else if (quantityServices > 1) {
      this.priceAdSvc = kmServices * this.kmExtraService;
      if (this.priceAdSvc > this.price1to2) {
        this.priceAdSvc = this.price1to2;
      }
    } else { this.priceAdSvc = null; }

    // Total Price
    this.totalPrice = this.price0to1 + this.price1to2 + this.price2to0 + this.priceAdSvc;

    // Console log to Developer TODO: Delete
    console.log('0 to 1 ->', this.price0to1);
    console.log('1 to 2 ->', this.price1to2);
    console.log('2 to 0 ->', this.price2to0);
    console.log('Aditional ->', this.priceAdSvc);
    console.log('Total Price ->', this.totalPrice);
    console.warn('Transfer Form', this.transferForm.value);
  }

  // Quantity
  transferQuantity(a: any) {
    if (a > 1) {
      // Get service distance
      let serviceDistance = this.transferForm.get('point1to2').value;
      let numberOfServices = serviceDistance * a;
      return numberOfServices;
    }
  }

  // End Class
}
