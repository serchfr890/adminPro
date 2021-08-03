import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreasingComponent } from './increasing/increasing.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncreasingComponent,
    DonaComponent
  ],
  exports: [
    IncreasingComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule

  ]
})
export class ComponentsModule { }
