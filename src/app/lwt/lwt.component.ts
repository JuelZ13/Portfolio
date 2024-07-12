import { Component } from '@angular/core';
import { LanguageModule } from '../language/language.module';

@Component({
  selector: 'app-lwt',
  standalone: true,
  imports: [],
  templateUrl: './lwt.component.html',
  styleUrl: './lwt.component.scss'
})
export class LwtComponent {

  constructor(public languageModule: LanguageModule){}
}
