import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'UiInventory';
  isLoggedIn :Boolean = false;;
 

  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService){
      
      this.authService.isLoginSubject$.subscribe(data =>
        {
          this.isLoggedIn = data;
          console.log(this.isLoggedIn)
        })


  }

}
