import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
export class LoginService {

  private _subject: Subject<boolean>;

  constructor() {
    this._subject = new Subject<boolean>();
  }

  get subject(): Observable<boolean> {
    return this._subject;
  }

  set logged(value: boolean) {
    this._subject.next(value);
  }

}
