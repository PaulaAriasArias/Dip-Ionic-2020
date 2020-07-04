import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calification'
})
export class CalificationPipe implements PipeTransform {

  transform(value: number): string {
    if (!value){
      return '';
    }
    if (value <= 1){
      return '#e74c3c';
    }else if (value >= 4){
        return '#2ecc71';
    }else{
      return '##f1c48f';
    }
  }
}
