import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addProvider',
  standalone: false
})
export class AddProviderPipe implements PipeTransform {

  transform(value:string): string {
    return "Fournisseur : "+value;
  }

}
