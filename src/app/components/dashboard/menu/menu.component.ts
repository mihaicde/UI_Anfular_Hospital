import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuList: String[] = ["Dashboard","User Management","Hospital manager","Warehouse Manager","Category","Products"," Inventory","Orders","Distribution"]
  constructor(  private route: ActivatedRoute,
    private router: Router,

  ) {}


  goToRoute(item){
    this.router.navigate(["../"])

  }
}
