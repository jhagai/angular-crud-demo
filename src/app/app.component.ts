import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public logged: boolean;

  constructor(private loginService: LoginService, private cd: ChangeDetectorRef) {

    loginService.subject.subscribe((val) => {
        this.logged = val;
      }
    )
  }

}
