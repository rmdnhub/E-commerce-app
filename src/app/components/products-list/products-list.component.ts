import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products?: Product[];
  currentProduct?: Product;
  currentIndex = -1;
  nom: "" | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getAll().subscribe(data => {
      console.log(data);
      this.products=data;
    },
      error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = undefined;
    this.currentIndex = -1;
  }

  saveActiveProduct(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  searchNom(): void {
    this.productService.findByNom(this.nom).subscribe(data => {
      this.products = data;
      console.log(data);
    },
      error => {
        console.error(error);
      });
  }

  removeAllProducts(): void {
    this.productService.deleteAll().subscribe(response => {
      console.log(response);
      this.refreshList();
    },
      error => {
        console.error(error);
      })
  }
}

// products!:Product[];
// currentProduct!:Product;
// currentIndex:number=-1;
// nom!:string;

// constructor(private productService: ProductService){}


//   ngOnInit(): void {
//     this.retrieveProducts();
//   }

//   retrieveProducts():void{
//     this.productService.getAll().subscribe(data=>{
//       this.products=data;
//       console.log(data);
//     },
//       error=>{
//         console.log(error);
//       });
//   }

//   refreshList(){
//     this.retrieveProducts();
//     this.currentProduct!=undefined;
//     this.currentIndex=-1;
//   }

//   saveActiveProduct(product:Product,index:number){
//     this.currentProduct=product;
//     this.currentIndex=index;
//   }

//   // searchNom(){
//   //   this.productService.findByNom(this.nom).subscribe(data=>{
//   //     this.products=data;
//   //     console.log(data);
//   //   },
//   //   error=>{
//   //     console.log(error);
//   //   });
//   // }

//   searchNom(): void {
//     this.productService.findByNom(this.nom).subscribe(data => {
//       this.products = data;
//       console.log(data);
//     },
//       error => {
//         console.error(error);
//       });
//   }

//   removeAllProducts(){
//     this.productService.deleteAll().subscribe(response => {
//       console.log(response);      
//     },
//     error=>{
//       console.log(error);
//     });
//   }