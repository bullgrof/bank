import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { ComponentMenu } from 'src/app/interfaces/userinterface';
import { Router } from '@angular/router';
declare var window;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
 // components: Observable<ComponentMenu[]>;
  constructor(private router: Router,) { 
                window.menu = this;            
              }

  ngOnInit() { }

  logout() {   
    this.router.navigate(['/home']);
  }
}
