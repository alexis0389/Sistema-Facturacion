import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css']
})
export class CreateProductFormComponent implements OnInit {
  categories: any[] = [
    {value: 'Hogar'},
    {value: 'Jugueteria'},
    {value: 'Tecnologia'},
    {value: 'Escolar'},
    {value: 'Oficina'}
  ]

  imagenes: any[] = []
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private productsService: ProductsService,
    private router: Router,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
     const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct)
        this.router.navigate(['admin/products'])
      })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      precio: [0, [Validators.required, Validators.min(1)]],
      cantidad: [0, [Validators.required, Validators.min(1)]]
    })
  }

  get Nombre() {
    return this.form.get('nombre')
  }

  get Categoria() {
    return this.form.get('categoria')
  }

  get Precio() {
    return this.form.get('precio')
  }

  get Cantidad() {
    return this.form.get('cantidad')
  }

}
