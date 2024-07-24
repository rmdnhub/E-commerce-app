import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{


  product: Product = {
    nom: '',
    description: '',
    prix: 0,
    publication: false
  };

  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  saveProduct(): void {
    const data = {
      nom: this.product.nom,
      description: this.product.description,
      prix: this.product.prix
    }
    this.productService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    },
      error => {
        console.error(error);
      });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      nom: '',
      description: '',
      prix: 0,
      publication: false
    };
  }
  

//   product!: Product;

//   submitted=false;


// constructor(private productService: ProductService) { }

// ngOnInit(): void {
// }



// saveProduct(): void {
//   const data = {
//     nom: this.product.nom,
//     description: this.product.description,
//     prix: this.product.prix
//   }
//   this.productService.create(data).subscribe(response => {
//     console.log(response);
//     this.submitted = true;
//   },
//     error => {
//       console.error(error);
//     });
// }

// newProduct(): void {
//   this.submitted = false;
//   this.product = {
//     nom: '',
//     description: '',
//     prix: 0,
//     publication: false
//   };
// }


moveFocus(event: Event, nextInputId:string):void{
  if((event as KeyboardEvent).keyCode==13){
    const nextInput=document.getElementById(nextInputId);
    if(nextInput){
      nextInput.focus();
    }
  }
}

}
