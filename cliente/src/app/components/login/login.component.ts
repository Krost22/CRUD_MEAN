import { Component } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(public userService: UsersService, public router: Router) {}

  login() {this.router.navigateByUrl('/listar-productos');
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        
      },
      error => {
        console.log(error);
      });
}
}
