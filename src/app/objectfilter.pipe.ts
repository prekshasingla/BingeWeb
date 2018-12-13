import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectfilter'
})
export class ObjectfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let arr=[];
    if(value!='empty')
    {
      arr.push(value);
    }
    return arr;
  }

}
