import {Component, OnInit, OnDestroy, ElementRef, ViewChild, ViewRef, TemplateRef} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/takeWhile'
import {Router} from "@angular/router";
import {ModalDirective} from "ngx-bootstrap";
import {LoginService} from "../login.service";
import {Observable} from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {


  private email: string;
  private password: string;

  private isMounted: boolean;

  @ViewChild(ModalDirective)
  private staticModal: ModalDirective;

  constructor(private _http: Http, private _router: Router, private loginService:LoginService) {
  }

  ngOnInit() {
    this.isMounted = true;
  }

  ngOnDestroy(): void {
    this.isMounted = false;
  }

  onNextLogin(res: Response): void {
    console.log(this.staticModal);
    if (res.ok) {
      // Success
      this._router.navigateByUrl('/logged');
      this.loginService.logged = true;
      console.log('Success: ' + JSON.stringify(res));
    } else {
      // Failure
      this.staticModal.show();
      this.loginService.logged = false;
      console.log('Failed: ' + JSON.stringify(res));
    }

  }

  onErrorLogin(error: Response): void {
    this.staticModal.show();
    console.log('Error: ' + JSON.stringify(error));
  }

  private login(): void {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    let observable = Observable.create(function(observer) {
      var result = {ok: true};
      observer.next(result)
    });

    observable.takeWhile(() => this.isMounted).subscribe(
      (res) => this.onNextLogin(res),
      (error) => this.onErrorLogin(error)
    );

    /*
    this._http.post('/login', {
      email: this.email,
      password: this.password
    }, options).takeWhile(() => this.isMounted).subscribe(
      (res) => this.onNextLogin(res),
      (error) => this.onErrorLogin(error)
    );*/
  }

}
