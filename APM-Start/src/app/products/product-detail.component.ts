import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle  = `Product Detail: ${id}`;
    this.product =   {
      'productId': 8,
      'productName': 'Saw',
      'productCode': 'TBX-0022',
      'releaseDate': 'May 15, 2016',
      'description': '15-inch steel blade hand saw',
      'price': 11.55,
      'starRating': 3.7,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
    }
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
