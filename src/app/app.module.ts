import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbMenuModule, NbIconModule, NbSpinnerModule, NbToastrModule, NbToastrService, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DraggableComponent } from './pages/draggable/draggable.component';
import { SingleCarDisplayComponent } from './pages/single-car-display/single-car-display.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './header/menu/menu.component';
import { CarsFromApiComponent } from './pages/cars-from-api/cars-from-api.component';
import { AboutComponent } from './pages/about/about.component';
import { ZemljevidComponent } from './pages/zemljevid/zemljevid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

@NgModule({
  declarations: [
    AppComponent,
    DraggableComponent,
    SingleCarDisplayComponent,
    MenuComponent,
    CarsFromApiComponent,
    AboutComponent,
    ZemljevidComponent,
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
    NbMenuModule.forRoot(),
    NbIconModule,
    NbSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,
    NbToastrModule.forRoot(),
    NbInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
