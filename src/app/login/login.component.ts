import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
public Nme: string;
  public EmailId: string;
  public pswd: string;
  public repswd: string;
  public users: any = JSON.parse(localStorage.getItem('User')) ? Array(JSON.parse(localStorage.getItem('User'))) : [];
  public isRegistration = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLogin() {
    const users = JSON.parse(localStorage.getItem('User'));
    const result = users.filter(user => {
      return user['email'] === this.EmailId && user['password'] === this.pswd;
    });
    if (result)  {
      this.router.navigate((['/home']));
    }
}

onRegister() {
  if (this.Nme === '') {
    alert('Name must be filled out');
  }
  if (this.EmailId === '') {
    alert('Email must be filled out');
  }
  if (this.pswd === '' ) {
    alert('Enter Password');
  }
  if (this.repswd !== this.pswd )  {
    alert('passwords should match');
  }
  const userObject = {
    firstName : this.Nme,
    emailId : this.EmailId,
    password: this.pswd
  };
  this.users.push(userObject);
  localStorage.setItem('User', JSON.stringify(this.users));
  this.router.navigate((['/home']));
//  alert('user registered');
}
}
