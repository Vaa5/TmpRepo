import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyIndicatorComponent } from './busy-indicator/busy-indicator.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpRequestInterceptor } from './interceptors/http-request-interceptor';

@NgModule({
  declarations: [ToolbarComponent, BusyIndicatorComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [BrowserAnimationsModule, HttpClientModule, ToolbarComponent, BusyIndicatorComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }]
})
export class CoreModule { }
