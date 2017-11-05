import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CarroAddComponent } from '../carro/carro-add.component';
import { IsaveForm } from '../model/save-form';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export  class SaveFormGuard implements CanDeactivate<IsaveForm> {

  canDeactivate(isSave: IsaveForm, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean{

    if (isSave.IsSavouRegistro() == false) {
      return confirm('Deseja sair sem salvar suas alterações?');
    }

    return true;
  }
}