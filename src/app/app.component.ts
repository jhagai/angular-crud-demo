import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public logged: boolean;

  private testCd:string;

  constructor(private loginService: LoginService, private cd: ChangeDetectorRef) {

    loginService.observable.subscribe((val) => {
        this.logged = val;
        this.cd.markForCheck();
      }
    )
  }

}
