import { Pipe, PipeTransform } from '@angular/core';
import { producto } from '../models/producto';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any[]): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.nombre.toLowerCase().indexOf(arg) > -1){
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }
  
}
