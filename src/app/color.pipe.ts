import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ColorService} from "./color.service";

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  constructor(private colorService:ColorService){}

  transform(label: number) {
    return this.colorService.getColors()(String(label));
  }

}
