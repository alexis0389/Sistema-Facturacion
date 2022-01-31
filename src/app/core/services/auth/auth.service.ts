import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import  firebase  from 'firebase/compat/app';
import 'firebase/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storageRef = firebase.app().storage().ref();

  constructor(
    private afa: AngularFireAuth,
  ) {
  }

  createUser(email: string, password: string) {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afa.signOut();
  }

  isLogin() {
    return this.afa.authState
  }

  async subirImagen(nombre: string, imgBase64: any) {
    try {
      const respuesta = await this.storageRef.child(`user/${nombre}`).putString(imgBase64, 'data_url');
      return await respuesta.ref.getDownloadURL();
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
