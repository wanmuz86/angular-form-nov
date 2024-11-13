import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  product:Product  = {
    name:'',
    price:0
  }

  addProduct(){
    console.log(this.product)
    // TODO: Later we will see how to send this to API for ex
  }

}
