import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'arrayToString'})
export class ArrayToString implements PipeTransform {
  //Convert genre array name to string
  transform(value: Array<any>): string {
      let genres = value.map(function(item) {
        return item['name'];
      });
    return genres.join(", ");
  }
}