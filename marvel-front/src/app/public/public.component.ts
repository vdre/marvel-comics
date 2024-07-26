import { Component } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {

  optionAction = 'login';

  constructor(){

  }

  getOption(option: string | Event) {
    console.log("getOption ~ option:", option)
    this.optionAction = option as string;
  }

}
