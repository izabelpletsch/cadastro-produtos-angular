import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  url = "http://localhost:3000/produtos";

  constructor(private http: HttpClient) { }

  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  postProdutos(produto:Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }

  deleteProdutos(produto:Produto): Observable<void> {
    return this.http.delete<void>(`${this.url}/${produto.id}`);
  }

  updateProdutos(produto:Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.url}/${produto.id}`, produto);
  }
}
