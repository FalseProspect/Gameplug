import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from "../models/comment";
@Pipe({
  name: 'commentFilter'
})
export class CommentFilterPipe implements PipeTransform {

  transform(value: Comment[], args?: any): any {
    if(args)
      return value.filter(e => e.parentComment === args)
    else
      return value.filter(e => e.parentComment === null)
    // return value;
  }

}
