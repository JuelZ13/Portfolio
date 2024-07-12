import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageModule } from '../language/language.module';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {

  skills1 = [
  {
    name: 'Angular',
    url: "../../assets/img/skillSet/angular.png",
    link: "#Angular"
  },
  {
    name: 'TrueScript',
    url: "../../assets/img/skillSet/truescript.png",
    link: "#Angular"
  },
  {
    name: 'JavaScript',
    url: "../../assets/img/skillSet/javascript.png",
    link: "#JavaScript"
  },
  {
    name: 'HTML',
    url: "../../assets/img/skillSet/html.png",
    link: "#JavaScript"
  },
  {
    name: 'Scrum',
    url: "../../assets/img/skillSet/scrum.png",
    link: "#JavaScript"
  },
  {
    name: 'Firebase',
    url: "../../assets/img/skillSet/firebase.png",
    link: "#Angular"
  },
  {
    name: 'GIT',
    url: "../../assets/img/skillSet/git.png",
    link: "#JavaScript"
  },
  {
    name: 'CSS',
    url: "../../assets/img/skillSet/css.png",
    link: "#JavaScript"
  },
  {
    name: 'Rest-Api',
    url: "../../assets/img/skillSet/restapi.png",
    link: "#Angular"
  },
  {
    name: 'Material design',
    url: "../../assets/img/skillSet/materialdesign.png",
    link: "#Angular"
  }
  ];

  constructor(public languageModule: LanguageModule){}

  ngOnInit(): void {
  }

}


