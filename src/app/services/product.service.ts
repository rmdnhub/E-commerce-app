import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
const baseUrl='http://localhost:8080/api/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(baseUrl);
  }  
  get(id:any):Observable<Product>{
    return this.http.get('${baseUrl}/${id}');
  }
  create(data:any): Observable<any>{
    return this.http.post(baseUrl,data);
  }
  update(id:any,data:any):Observable<any>{
    return this.http.put('${baseUrl}/${id}',data);
  }
  delete(id:any):Observable<any>{
    return this.http.delete('${baseUrl}/${id}');
  }
  deleteAll():Observable<any>{
    return this.http.delete(baseUrl);
  }
  findByNom(nom:any):Observable<any>{
    return this.http.get('${baseUrl}nom?=${nom}');
  }
}