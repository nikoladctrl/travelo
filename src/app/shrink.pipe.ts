import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shrink'
})
export class ShrinkPipe implements PipeTransform {

  transform(description: string): string {
    if (description.length > 50) {
      return description.substring(0,50) + '...';
    }
    return description;
  }

}
