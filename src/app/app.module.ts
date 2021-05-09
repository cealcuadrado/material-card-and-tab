import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FooCardComponent } from './shared/foo-card/foo-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentOneComponent } from './shared/content-one/content-one.component';
import { ContentTwoComponent } from './shared/content-two/content-two.component';
import { ContentThreeComponent } from './shared/content-three/content-three.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooCardComponent,
    ContentOneComponent,
    ContentTwoComponent,
    ContentThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
