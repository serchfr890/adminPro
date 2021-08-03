import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styleUrls: ['./increasing.component.css']
})
export class IncreasingComponent {
  //  Si se requiere renombrar la propiedad del input, solo vasta con ingresarla en el parentesis
  @Input('valor') progress: number = 40;
  @Input() btnClass: string = 'btn btn-primary'

  @Output() outputValue: EventEmitter<number> = new EventEmitter();
  
  
  // get progressPercent() {
  //   return `${this.progress}%`
  // }

  changeValue(value: number): void {
    if (this.progress >= 100 && value >= 0) {
      this.progress = 100;
      this.outputValue.emit(100);
      return;
    }

    if (this.progress <= 0 && value <= 0) {
      this.progress = 0
      this.outputValue.emit(0);
      return;
    }

    this.progress += value;
    this.outputValue.emit(this.progress)
  }
  
  onChange(value: number) {
    // console.log('event ', e)
    this.outputValue.emit(value)
    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0
    } else {
      this.progress = value
    }
    this.outputValue.emit(this.progress)
  }
}
