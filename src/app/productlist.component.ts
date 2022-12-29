import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  template: `<h1>Hello {{prodTitle}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class ProductListComponent {
  @Input() prodTitle: string;
}
