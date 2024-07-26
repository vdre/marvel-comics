import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { ViewComicComponent } from './view-comic/view-comic.component';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    ViewComicComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
    ViewComicComponent
  ]
})
export class ComponentsModule { }
