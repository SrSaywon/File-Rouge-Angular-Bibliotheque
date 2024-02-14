import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  hide = true;
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authenticationService: AuthenticationService, private router : Router){}

  onClickButton() {
    this.authenticationService
      .login(this.profileForm.value.username!, this.profileForm.value.password!)
      .subscribe({next: t => localStorage.setItem("token", JSON.stringify(t)),
        error: err => {console.log(err)},
        complete: () => {
        this.router.navigate([""]);

        }
  });
  }
}
