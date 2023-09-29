import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
[MatFormFieldModule, MatInputModule, FormsModule, NgIf, MatButtonModule, MatIconModule]
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule, 
    MatInputModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule, 
    MatIconModule, 
    FormsModule, 
    MatGridListModule, 
    MatToolbarModule,
    ReactiveFormsModule, 
    HttpClientModule, 
    MatProgressBarModule, 
    MatButtonModule, 
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
