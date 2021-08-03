import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styleUrls: ['./increasing.component.css']
})
export class IncreasingComponent {
//  Si se requiere renombrar la propiedad del input, solo vasta con ingresarla en el parentesis
  // @Input('valor') progress: number = 40;
  @Input() progress: number = 40;
  
  // get progressPercent() {
  //   return `${this.progress}%`
  // }

  changeValue(value: number): void {
    if (this.progress >= 100 && value >= 0) {
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && value <= 0) {
      this.progress = 0
      return;
    }

    this.progress += value;
  }

}
