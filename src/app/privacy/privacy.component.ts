import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { LanguageModule } from '../language/language.module';

@Component({
    selector: 'app-privacy',
    standalone: true,
    templateUrl: './privacy.component.html',
    styleUrl: './privacy.component.scss',
    imports: [NavbarComponent, FooterComponent]
})

export class PrivacyComponent {
constructor(public languageModule: LanguageModule){}
}
