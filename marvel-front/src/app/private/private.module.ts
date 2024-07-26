import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../core/components/components.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MyComicsComponent } from './my-comics/my-comics.component';



@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent,
    MyComicsComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ComponentsModule, 
    InfiniteScrollModule
  ]
})
export class PrivateModule { }
