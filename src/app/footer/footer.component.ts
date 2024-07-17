import { Component } from '@angular/core';
import { LanguageModule } from '../language/language.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(public languageModule: LanguageModule){}

  switchImpressum(){
    if(this.languageModule.impressumOn){
      this.languageModule.impressumOn = false;
    }else{
      this.languageModule.impressumOn = true;
    }
  }
}

