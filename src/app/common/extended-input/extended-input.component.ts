import {
  Component, OnInit, Input, AfterViewInit,
  ContentChild
} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-extended-input',
  templateUrl: './extended-input.component.html',
  styleUrls: ['./extended-input.component.css']
})
export class ExtendedInputComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.errors);
  }

  @Input()
  private labelText: string;

  @ContentChild(NgModel)
  private anNgModel:NgModel;

  @ContentChild('errors')
  private errors:any;

  constructor() {
  }

  ngOnInit() {
  }
}
