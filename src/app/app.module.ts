import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbButton } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DraggableComponent } from './pages/draggable/draggable.component';
import { SingleCarDisplayComponent } from './pages/single-car-display/single-car-display.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DraggableComponent,
    SingleCarDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbCardModule,
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
