import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from "./template-form/template-form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateFormComponent, ReactiveFormComponent, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-demo';
}
