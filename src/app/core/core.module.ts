import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
  CommonModule
  ],
  exports: [BrowserAnimationsModule, HttpClientModule, MaterialModule, ToolbarComponent]
})
export class CoreModule { }
