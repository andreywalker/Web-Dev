
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { products } from '../products';
import { Product } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

/*
export class ProductsComponent implements OnInit {
  name: string
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name')
  }
}

*/


export class ProductsComponent implements OnInit {
  
  categoryName:string ="";
  myProducts: Product[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryName = params.get('name')||"";
    });
    console.log(this.categoryName);
    this.myProducts = products.filter((x) => this.categoryName == x.category);
    
  }


  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('NOTIFICATION!!!!!');
  }
}



/*
export class ProductsComponent implements OnInit {
  categoryName="";
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryName = params.get('name')||"";
    });
  }
  products = products.filter(this.isGreaterThanFive);
  isGreaterThanFive(x: Product) {
    return x.category = this.categoryName;
}
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('NOTIFICATION!!!!!');
  }

}
*/