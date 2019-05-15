// using lifecycle hooks like OnInit
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

// using templateUrl and styleUrls properties of the component decorator
@Component({
templateUrl: './product-list.component.html',
styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

  pageTitle: string= 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;
  // listFilter: string = 'cart';

  _listFilter: string;
  filterProducts: IProduct[];

  get listFilter(): string {
      return this._listFilter;
  }

  set listFilter(value: string){
      this._listFilter = value;
      this.filterProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
  }


  products: IProduct[] = [];

  constructor(private productService: ProductService) {

   // this.listFilter = "cart";
  }

  onRatingClicked(message: number): void {
    this.pageTitle = '' + message;
    }

  performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy)!= -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }


  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {this.products = products;
        this.filterProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );

  }
}
