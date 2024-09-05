import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceEmptyWith',
  pure: true
})
export class ReplaceEmptyWithPipe implements PipeTransform {

  transform(value: string | null, ...args: string[]): unknown {
    return value === null || '' ? args[0] : value;
  }

}
