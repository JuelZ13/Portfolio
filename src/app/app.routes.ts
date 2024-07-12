import { Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', component:  MainComponent},
  { path: 'privacy', component:  PrivacyComponent},
  { path: 'impressum', component:  ImpressumComponent},
];
