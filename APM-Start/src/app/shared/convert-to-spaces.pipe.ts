
//for building a custom pipe
import { Pipe, PipeTransform } from '@angular/core';

//decarator for pipe component
@Pipe({
  name: 'convertToSpaces'
})

//PipeTransform is an interface and transform() is the method needed for custom pipe impl
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
}
}
