import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { LanguageModule } from '../language/language.module';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss'
})
export class MyworkComponent {

  constructor(public languageModule: LanguageModule){}

}

