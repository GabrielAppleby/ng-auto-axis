import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { AutoAxisChartComponent } from './auto-axis-chart/auto-axis-chart.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import { ControlPointsComponent } from './control-points/control-points.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { BypassImageSecurityPipe } from './bypass-image-security.pipe';
import { ColorPipe } from './color.pipe';
import { UnprojectedComponent } from './unprojected/unprojected.component';
import { OriginalComponent } from './original/original.component';
import { RetrainComponent } from './retrain/retrain.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoAxisChartComponent,
    ControlPointsComponent,
    BypassImageSecurityPipe,
    ColorPipe,
    UnprojectedComponent,
    OriginalComponent,
    RetrainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
