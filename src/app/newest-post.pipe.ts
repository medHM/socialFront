import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newestPost'
})
export class NewestPostPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    if(args ==='ascending'){
      return value.sort();
    }else if (args ==='descending'){
      return value.sort().reverse();
    }

  }

}
