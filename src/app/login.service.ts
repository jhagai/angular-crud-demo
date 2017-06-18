import {Injectable} from '@angular/core';
import {Observable, Observer} from "rxjs";

@Injectable()
export class LoginService {

  private _observable: Observable<boolean>;
  private _observer: Observer<any>;

  constructor() {
    this._observable = Observable.create((observer) => {
      this._observer = observer;
    });
  }

  get observable(): Observable<boolean> {
    return this._observable;
  }

  set logged(value: boolean) {
    this._observer.next(value);
  }

}
