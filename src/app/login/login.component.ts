import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    standalone: true,
    imports: [FormsModule, NgIf],
})
export class LoginComponent implements OnInit {
  message: string = 'Vous ête déconnecté. (pikachu/pikachu)';
  name: string = '';
  password: string = '';
  auth!: AuthService;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.auth = this.authService
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté';
    } else {
      this.message = 'Erreur id/mdp';
    }
  }

  login() {
    this.message = 'Tentative connexion en cours...';
    this.auth
      .login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          console.log('loginComponent', isLoggedIn)
          this.router.navigate(['/pokemons']);
        } else {
          this.password = '';
          // return this.router.navigate(['/login']);
        }
      });
  }


  logout() {
    this.auth.logout();
    this.message='Voue êtes déconnecté'
  }
}
