import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  // Defining the form element and validation rules for the Form

 productForm = new FormGroup({
  name: new FormControl('',{nonNullable:true}),
  price:  new FormControl(0, {nonNullable:true})
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
