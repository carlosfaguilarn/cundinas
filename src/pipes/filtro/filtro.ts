import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FiltroPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(items:any, term:any): any {
    if(term === undefined){
      return items;
    }
    if(items === undefined){
      return items;
    }
    return items.filter(function(item){
      if(item.name)
        return item.name.toLowerCase().startsWith(term.toLowerCase());
      else 
        return item;
    })
  }
}
