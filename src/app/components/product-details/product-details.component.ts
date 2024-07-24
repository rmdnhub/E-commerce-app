import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  currentProduct: Product = {
    nom: '',
    description: '',
    prix: 0,
    publication: false
  };
  message = '';

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getProduct(this.route.snapshot.params['id']);
  }

  getProduct(id: string): void {
    this.productService.get(id).subscribe(data => {
      this.currentProduct = data;
      console.log(data)
    },
      error => {
        console.error(error);
      });
  }

  updatePublication(status: boolean): void {
    const data = {
      nom: this.currentProduct.nom,
      description: this.currentProduct.description,
      prix: this.currentProduct.prix,
      publication: status
    };
    this.productService.update(this.currentProduct.identifiant, data).subscribe(response => {
      this.currentProduct.publication = status;
      console.log(response);
      this.message = response.message;
    },
      error => {
        console.error(error);
      });
  }

  updateProduct(): void {
    this.productService.update(this.currentProduct.identifiant, this.currentProduct).subscribe(response => {
      console.log(response);
      this.message = response.message;
    },
      error => {
        console.error(error);
      });
  }

  deleteProduct(): void {
    this.productService.delete(this.currentProduct.identifiant).subscribe(response => {
      console.log(response);
      this.router.navigate(['/products'])
    },
      error => {
        console.error(error);
      });
  }

    
  }


  // currentProduct!:Product;
  // message!: String;

  // constructor(private productService : ProductService,private route:ActivatedRoute,private router : Router){}

  // ngOnInit(): void {
  //     this.message='';
  //     this.getProduct(this.route.snapshot.params['id']);
  // }
  // getProduct(id : String){
  //   this.productService.get(id).subscribe(data=>{
  //     this.currentProduct=data;      
  //     console.log(data);
  //   },error =>{
  //     console.log(error);
  //   })
  // }

  // updatePublication(status:boolean){
  //   const data={
  //     nom:this.currentProduct.nom,
  //     description:this.currentProduct.description,
  //     prix:this.currentProduct.prix,
  //     publication:status
  //   };

  //   this.productService.update(this.currentProduct.identifiant,data).subscribe(response=>{
  //     this.currentProduct.publication=status;
  //     console.log(response);
  //   },
  //   error=>{
  //     console.log(error);
  //   });
  // }

  // updateProduct(){
  //   this.productService.update(this.currentProduct.identifiant,this.currentProduct).subscribe(response =>{
  //     console.log(response);
  //     this.message=response.message;
  //   },
  //   error=>{
  //     console.log(error);
  //   }
  //   )
  // }

  // deleteProduct(){
  //   this.productService.delete(this.currentProduct.identifiant).subscribe(response=>{
  //     console.log(response);
  //     this.router.navigate(['/products']);
  //   },
  //     error=>{
  //       console.log(error);
  //     }
  //     )
  //   }