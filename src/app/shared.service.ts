import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  impressum :boolean = false;

  constructor() { }
}
