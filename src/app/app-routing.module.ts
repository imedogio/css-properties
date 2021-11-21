import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexComponent } from './flex/flex.component';
import { MarginComponent } from './margin/margin.component';
import { PositionComponent } from './position/position.component';

const routes: Routes = [
  {path: 'flex', component: FlexComponent},
  {path: 'position', component: PositionComponent},
  {path: 'margin', component: MarginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
