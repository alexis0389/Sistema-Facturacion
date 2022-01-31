import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/core/services/customers/customers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-customer-form',
  templateUrl: './create-customer-form.component.html',
  styleUrls: ['./create-customer-form.component.css']
})
export class CreateCustomerFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customersService: CustomersService,
  ) {
    this.buildForm();
  }
  
  ngOnInit(): void {
    
  }

  saveCustomer(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const customer = this.form.value;
      this.customersService.createCustomer(customer)
      .subscribe((newCustomer) => {
        console.log(newCustomer);
      })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]]
    })
  }

  get Nombre() {
    return this.form.get('nombre')
  }

  get Direccion() {
    return this.form.get('direccion')
  }

  get Email() {
    return this.form.get('email')
  }
}
