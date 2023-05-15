import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpConponentComponent } from '../help-conponent/help-conponent.component';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { RegisterComponentComponent } from '../register-component/register-component.component';

@NgModule({
  declarations: [
    HelpConponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
  ],
  imports: [CommonModule],
  exports: [
    HelpConponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
  ],
})
export class AuthenticationModule {}
