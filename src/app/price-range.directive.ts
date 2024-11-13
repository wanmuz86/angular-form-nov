import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


// TO create a custom Validator add  return type ValidatorFn from angularForms 
export function PriceRangeValidator(min:number, max:number) : ValidatorFn{
  // I will retrieve control which is the UI element which will have this validation
  // control here refers to "price input" for example
  // This function will either return an error (if there is an error)
  // or null (if there is no error)
  return (control:AbstractControl<number>) : ValidationErrors | null => {
    // Validation = check the value entered by user within min and max
    const inRange = control.value > min && control.value < max
    // if inRange is true (fulfilled the validation criteria) = return null (no issue)
    // if not return error , of type outOfRange
    return inRange ? null : {outOfRange:true};
  }

  

}
