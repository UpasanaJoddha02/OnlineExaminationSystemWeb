import { Injectable } from '@angular/core';
import { Registration } from '../Models/registration';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }
  UserDetails: Registration;
}
