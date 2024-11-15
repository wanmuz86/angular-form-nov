import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PriceRangeValidator } from '../price-range.directive';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  // Defining the form element and validation rules for the Form

  minValue = 1
  maxValue = 1000000

 productForm = new FormGroup({
  name: new FormControl('',{nonNullable:true, validators:[Validators.required, Validators.maxLength(255), Validators.minLength(10)]}),
  price:  new FormControl(0, {nonNullable:true, validators:[PriceRangeValidator(this.minValue,this.maxValue), Validators.required]})
 });

  
 // Getter form the value of the form 
 get name() { return this.productForm.controls.name }
 get price() { return this.productForm.controls.price }

 createProduct(){
  // Retrieveing name and product
  console.log(this.name.value);
  console.log(this.price.value);
 }
}
