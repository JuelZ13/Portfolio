import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { PovComponent } from "../pov/pov.component";
import { LwtComponent } from "../lwt/lwt.component";
import { SkillsetComponent } from "../skillset/skillset.component";
import { MyworkComponent } from "../mywork/mywork.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [NavbarComponent, PovComponent, LwtComponent, SkillsetComponent, MyworkComponent, ContactComponent, FooterComponent]
})
export class MainComponent {

}
