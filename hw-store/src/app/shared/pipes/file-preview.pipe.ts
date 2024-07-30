import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filePreview',
  standalone: true
})
export class FilePreviewPipe implements PipeTransform {

  // transform(file: File): string {
  //   return URL.createObjectURL(file);
  // }

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
