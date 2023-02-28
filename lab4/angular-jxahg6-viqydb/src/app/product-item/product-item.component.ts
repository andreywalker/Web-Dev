import { Component, Input } from '@angular/core';
import { Product } from '../products';
import { products } from '../products';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  products=products;
  likes=this.product.likes;
  //product2:Product likes=this.product2.likes+1;
  increaseLikes(){
      this.likes+=1;
  }
  del(){
    
  }
}
