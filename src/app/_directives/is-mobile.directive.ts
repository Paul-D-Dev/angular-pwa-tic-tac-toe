import { UtilsService } from './../core/services/utils.service';
import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[isMobile]'
})
export class IsMobileDirective implements OnInit {

  @Input('isMobile') isMobile: boolean ;

  constructor(private utilsService: UtilsService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

  ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
    (this.isMobile === this.utilsService.isMobile()) ?
        this.viewContainer.createEmbeddedView(this.templateRef) :
        this.viewContainer.clear();
  }
}
