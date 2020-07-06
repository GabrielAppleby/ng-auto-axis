import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'bypassImageSecurity'
})
export class BypassImageSecurityPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(html) {
    return this.sanitizer.bypassSecurityTrustUrl(html);
  }

}
