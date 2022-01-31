import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private router: Router,
    private anFiAu: AngularFireAuth
  ) {}

  logout() {
    this.auth.logout()
    .then((salir) => {
      Swal.fire({
        title: '¿Esta seguro que desea salir?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Salir a home',
        confirmButtonColor: '#546E7A',
        cancelButtonColor: 'red',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          console.log(salir)
          window.localStorage.removeItem('key')
          this.router.navigate(['/home'])
        }
      })
    })
  }

}
