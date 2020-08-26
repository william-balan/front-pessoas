import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = "http://localhost:8080/v1/pessoas";
  authorization = "Basic cGVzc29hOjEyMw=="

  constructor(private http: HttpClient) { }

  listar() {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", this.authorization);
    return this.http.get(this.apiUrl, { headers });
  }

  criarPessoa(pessoa: any) {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", this.authorization);
    
    return this.http.post(this.apiUrl, pessoa, { headers });
  }
}
