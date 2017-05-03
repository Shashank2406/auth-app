import {Pipe, PipeTransform} from '@angular/core';


                  //This is a custom Pipe for string
@Pipe({name : 'lengthLimit'})
export class Pipee implements PipeTransform{
  transform(value : string,length){
    console.log(value,length);
    // return value.slice(0,length);
  }

}