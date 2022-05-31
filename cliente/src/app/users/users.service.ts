// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: "root"

})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable <any> {
    return this.http.post("http://localhost:4000/api/login", user);
  }

  register(user: any): Observable<any> {
    return this.http.post("http://localhost:4000/api/register", user);
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUser() {
    return this.http.get("http://localhost:4000/api/users/2");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }

}