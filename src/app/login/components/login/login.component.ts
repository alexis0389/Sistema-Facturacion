import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailF!: FormControl;
  hide = true;
  formLogin!: FormGroup;
  image: string = 'assets/img/LoginImage.png';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.buildForm();
    this.emailF = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/),
    ])
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login(event: Event) {
    event.preventDefault();
    if (this.formLogin.valid) {
      const value = this.formLogin.value;
      this.auth.login(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        });
        Toast.fire({
          icon: 'error',
          title: 'Email o contraseña incorrecta'
        })
      })
    }
  }

  get Email() {
    return this.formLogin.get('email')
  }

  get Pass() {
    return this.formLogin.get('password');
  }

}
