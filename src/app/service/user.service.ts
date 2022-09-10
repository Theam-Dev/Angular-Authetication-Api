import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/user";
const baseUrl = "http://localhost:8000/api";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }
  login(user: User): Observable<User> {
    return this.http.post<User>(baseUrl+"/login", user).pipe(
      map((obj) => obj),
    );
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(baseUrl+"/register", user).pipe(
      map((obj) => obj),
    );
  }
}
