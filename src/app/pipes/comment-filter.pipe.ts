import { Pipe, PipeTransform } from '@angular/core';
import { UserComment } from "../models/userComment";
@Pipe({
  name: 'commentFilter'
})
export class CommentFilterPipe implements PipeTransform {

  transform(value: UserComment[], args?: any): any {
    if(args)
      return value.filter(e => e.parentComment === args)
    else
      return value.filter(e => e.parentComment === null)
    // return value;
  }

}
