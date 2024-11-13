import { Component } from '@angular/core';
import { Product } from '../product';
import { FormControl, FormGroup , FormArray} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {

  cart: Product[] = []
  number = 1;

  cartForm =  new FormGroup({
    // Form Array is the form that will be added dynamically
    products: new FormArray<FormControl<number>>([])
  });

  addToCart(){
    this.cart.push({name:`product ${this.number}`, price:123});
    this.number++
    // I will also add the Form that will store the quantity of the item
    this.cartForm.controls.products.push(
      new FormControl(1, {nonNullable:true})
    )
  }
}
