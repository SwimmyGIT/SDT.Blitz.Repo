import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  prodTitle = 'COMPUTERS & Accessories' + VERSION.major;
}
