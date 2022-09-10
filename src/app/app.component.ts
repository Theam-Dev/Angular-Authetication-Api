import { Router } from "@angular/router";
import { Component, ViewChild, ElementRef } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-auth';
  public register:boolean = false;
  public login:boolean = false;
  public logout:boolean = false;

  constructor(private router: Router){}
  
  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.logout = true;
      this.login = false;
        this.register = false;
    }else{
        this.logout = false;
        this.login = true;
        this.register = true;
    }
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
