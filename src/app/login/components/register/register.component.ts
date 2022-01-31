import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailRegister!: FormControl;
  formRegister!: FormGroup;
  image: string = 'assets/img/RegisterImage.png'

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.buildForm();
    this.emailRegister = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/),
    ])
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formRegister = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passConfirm: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  Register(event: Event) {
    event.preventDefault();
    if (this.formRegister.valid) {
      const value = this.formRegister.value;
      this.auth.createUser(value.email, value.password)
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Usuario creado exitosamente'
        })
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2500);
      });
    }
  }

  get Email() {
    return this.formRegister.get('email');
  }

  get Pass() {
    return this.formRegister.get('password');
  }

  get PassConfim() {
    return this.formRegister.get('passConfirm');
  }
}
