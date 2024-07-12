import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageModule } from '../../language/language.module';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  public projects;

  constructor(public languageModule: LanguageModule){
    this.projects = [{
      headline_en: 'Join',
      headline_de: 'Join',
      headline2: 'JavaScript | HTML | CSS',
      description_en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      description_de: 'Aufgabenplanung inspiriert durch Kanban. Erstelle und organisiere deine Aufgaben, nutze die Drag&Drop funktion. Weise den Aufgaben Benutzer und Kategorien zu.',
      img: '../../../assets/img/project/join.png',
      enabled: 1,
      link: "JavaScript",
      githublink: "https://github.com/JuelZ13/Join",
      liveLink:"https://join.it-klee.de"
    },
    {
      headline_en: 'El Pollo Loco',
      headline_de: 'El Pollo Loco',
      headline2: 'JavaScript | HTML | CSS',
      description_en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      description_de: 'Spring-, Lauf- und Wurfspiel basierend auf Objektorientierung. Hilf Pepe, Münzen und Tabasco flaschen zu finden, um gegen die verrückten Hühner zu kämpfen.',
      img: '../../../assets/img/project/elpolloloco.png',
      enabled: 1,
      link: "JavaScript1",
      githubLink: "https://github.com/JuelZ13/ElPolloLoco",
      liveLink:"https://elpolloloco.it-klee.de"

    },
    {
      headline_en: 'Portfolio',
      headline_de: 'Portfolio',
      headline2: 'Angular | TrueScript | HTML | SCSS',
      description_en: 'Portfolio to my person as frontend developer.',
      description_de: 'Portfolio über meine Person als Frontend Entwickler.',
      img: '../../../assets/img/project/portfolio.png',
      enabled: 1,
      link: "Angular",
      githubLink: "https://github.com/JuelZ13/Portfolio",
      liveLink:"https://portfolio.it-klee.de"
    },
    {
      headline_en: 'Coming soon',
      headline_de: 'Demnächst',
      headline2: 'Angular | TrueScript | HTML | SCSS',
      description_en: '',
      description_de: '',
      img: '../../../assets/img/project/black.png',
      enabled: 0,
      link: "Angular1",
      githubLink: "",
      liveLink:""
    },
    {
      headline_en: 'Coming soon',
      headline_de: 'Demnächst',
      headline2: 'Angular | TrueScript | HTML | SCSS',
      description: '',
      img: '../../../assets/img/project/black.png',
      enabled: 0,
      link: "Angular2",
      githubLink: "",
      liveLink:""
    }];
  }

  getSide(index: number) {
    if (index == 0 || index == 1){
      return index
    }else{
      return index % 2
    }
  }
}

