import { LanguageModule } from '../language/language.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pov',
  standalone: true,
  imports: [LanguageModule],
  templateUrl: './pov.component.html',
  styleUrl: './pov.component.scss'
})
export class PovComponent {
  ngOnInit(): void {
  }
  constructor(public languageModule: LanguageModule) {
  }
}
