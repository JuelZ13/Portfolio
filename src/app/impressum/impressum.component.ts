import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { LanguageModule } from '../language/language.module';

@Component({
    selector: 'app-impressum',
    standalone: true,
    templateUrl: './impressum.component.html',
    styleUrl: './impressum.component.scss',
    imports: [FooterComponent, NavbarComponent]
})
export class ImpressumComponent {
constructor(public languageModule: LanguageModule){}

}
