import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { Inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate {
  constructor(private accounntService: AccountService, private toastr: ToastrService){

  }
  canActivate(): Observable<boolean> {
    return this.accounntService.currentUser$.pipe(
      map(user =>{
        if(user) return true;
        this.toastr.error('You shall not pass!');
        return false;
      
    })
  )
}
};
        
