import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularExercise-FV';

  negativeValue : number = 0;
  positiveValue : number = 0;  

  increment(){
    this.positiveValue++;
  }

  decrease(){
    this.negativeValue++;
  }

  getSum() : number {
    return this.positiveValue - this.negativeValue;
  }
    
  reset(){
    this.positiveValue = 0;
    this.negativeValue = 0;
  }

}
