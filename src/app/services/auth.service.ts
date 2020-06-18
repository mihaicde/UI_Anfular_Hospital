import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { map } from "rxjs/operators";


@Injectable()
export class AuthService {


    isLoginSubject$ = new BehaviorSubject<boolean>(this.hasToken());
    
    private hasToken(): boolean {
        return !!localStorage.getItem('token');
    }


}

