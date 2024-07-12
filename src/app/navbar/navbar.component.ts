import { LanguageModule } from './../language/language.module';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [LanguageModule]
})
export class NavbarComponent {
  ngOnInit(): void {
  }

  @Input() linkActive: number;
  @Input() mobileMenu: number;

  constructor(public languageModule: LanguageModule) {
    this.linkActive = 0;
    this.mobileMenu = 0;
   }
}
