import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbButtonModule,
  NbMenuModule,
  NbIconModule,
  NbSpinnerModule,
  NbToastrModule,
  NbToastrService,
  NbInputModule,
  NbSelectModule,
  NbOptionModule,
  NbRadioModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DraggableComponent } from './pages/draggable/draggable.component';
import { SingleCarDisplayComponent } from './pages/single-car-display/single-car-display.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './header/menu/menu.component';
import { CarsFromApiComponent } from './pages/cars-from-api/cars-from-api.component';
import { AboutComponent } from './pages/about/about.component';
import { ZemljevidComponent } from './pages/zemljevid/zemljevid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { DodajAvtoComponent } from './pages/about/dodaj-avto/dodaj-avto.component';
import { BelezkaService } from './services/belezka.service';
import { KamjonComponent } from './pages/kamjon/kamjon.component';
import { PrenosComponent } from './pages/kamjon/prenos/prenos.component';
import { MotorComponent } from './pages/kamjon/motor/motor.component';
import { PercentagePipe } from './pipes/percentage.pipe';
import { CylindersPipe } from './pipes/cylinders.pipe';
import { DisplacementPipe } from './pipes/displacement.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { WhoresComponent } from './pages/whores/whores.component';
import { YellowizeDirective } from './directives/yellowize.directive';
import { ParSvetiDuhComponent } from './oljkice/par-sveti-duh/par-sveti-duh.component';
import { DomaComponent } from './oljkice/doma/doma.component';
import { VseOljkiceComponent } from './oljkice/vse-oljkice/vse-oljkice.component';
import { LogService } from './oljkice/oljkice/log.service';
import { UpdatedLogService } from './oljkice/oljkice/updated-log.service';
import { VVazahComponent } from './oljkice/v-vazah/v-vazah.component';
import { MyassistantComponent } from './myassistant/myassistant.component';
import { JuliaivaComponent } from './myassistant/juliaiva/juliaiva/juliaiva.component';
import { ChainsawModule } from './pages/chainsaw/chainsaw.module';
import { HoferComponent } from './pages/grinders/electric-grinders/hofer/hofer.component';
import { AuthenticationModule } from './pages/tutorial/authentication/authentication.module';
import { LetalaModule } from './pages/letala/letala/letala.module';
import { TankiModule } from './pages/tanki/tanki/tanki.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DraggableComponent,
    SingleCarDisplayComponent,
    MenuComponent,
    CarsFromApiComponent,
    AboutComponent,
    ZemljevidComponent,
    BetterHighlightDirective,
    DodajAvtoComponent,
    KamjonComponent,
    PrenosComponent,
    MotorComponent,
    PercentagePipe,
    CylindersPipe,
    DisplacementPipe,
    FilterPipe,
    WhoresComponent,
    YellowizeDirective,
    ParSvetiDuhComponent,
    DomaComponent,
    VseOljkiceComponent,
    VVazahComponent,
    MyassistantComponent,
    JuliaivaComponent,
    HoferComponent,
    PageNotFoundComponent,
    HomeComponent,
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
    NbInputModule,
    NbSelectModule,
    NbOptionModule,
    NbRadioModule,
    NbMenuModule.forRoot(),
    AuthenticationModule,
    LetalaModule,
    TankiModule,
  ],
  providers: [
    BelezkaService,
    { provide: LogService, useClass: UpdatedLogService },
    {
      provide: UpdatedLogService,
      useClass: UpdatedLogService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
