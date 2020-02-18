import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy/lazy.component';

const router: Routes = [
  {
    path: '',
    component: LazyComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    LazyComponent
  ]
})
export class LazyModule { }