import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalLayoutComponent } from './global-layout/global-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { GridComponentComponent } from './grid-component/grid-component.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { LineChartCardComponent } from './cards/line-chart-card/line-chart-card.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { DoughnutChartCardComponent } from './cards/doughnut-chart-card/doughnut-chart-card.component';
import { BarChartCardComponent } from './cards/bar-chart-card/bar-chart-card.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    GlobalLayoutComponent,
    GridComponentComponent,
    LineChartCardComponent,
    DoughnutChartCardComponent,
    BarChartCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzCardModule,
    NzAvatarModule  
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
