import { Component } from '@angular/core';


//decorator -> Metadata

@Component({
selector: 'pm-root',
templateUrl: './app.component.html'
})

//class -> code

export class AppComponent {

  pageTitle: string = "Product Management";

}
