import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashComponent } from '../dash/dash.component';
import { MaterialModule } from '../material/material.module';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FooterComponent } from '../footer/footer.component';
import { Card1Component } from '../card1/card1.component';
import { Card2Component } from '../card2/card2.component';
import { Card3Component } from '../card3/card3.component';
import { Card4Component } from '../card4/card4.component';
import { ReactiveFormsModule } from '@angular/forms';
console.warn("Dash loaded")
@NgModule({
  declarations: [
    DashComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
