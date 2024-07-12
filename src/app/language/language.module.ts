import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class LanguageModule {
  public selectedLanguage:string = "en";
  @Input() public sl_languageImg:string ="";
  @Input() public sl_aboutme:string = "";
  @Input() public sl_skillset:string = "";
  @Input() public sl_mywork:string = "";
  @Input() public sl_h1:string = "";
  @Input() public sl_scroll:string = "";
  @Input() public sl_description:string = "";
  @Input() public sl_description1:string = "";
  @Input() public sl_h1Lwt:string = "";
  @Input() public sl_btnLwt:string = "";
  @Input() public sl_h1Skillset:string = "";
  @Input() public sl_h1Mywork:string = "";
  @Input() public sl_spanMywork:string = "";
  @Input() public sl_h1Contact:string = "";
  @Input() public sl_h2Contact:string = "";
  @Input() public sl_spanContact:string = "";
  @Input() public sl_h3Contact:string = "";
  @Input() public sl_bContact:string = "";
  @Input() public sl_contactName:string = "";
  @Input() public sl_contactNamerequired:string = "";
  @Input() public sl_contactMail:string = "";
  @Input() public sl_contactMailrequired:string = "";
  @Input() public sl_contactMessage:string = "";
  @Input() public sl_contactMessagerequired:string = "";
  @Input() public sl_contactPrivacy1:string = "";
  @Input() public sl_contactPrivacy2:string = "";
  @Input() public sl_contactPrivacy3:string = "";
  @Input() public sl_contactPrivacyrequired:string = "";
  @Input() public sl_contactBtn:string = "";
  @Input() public sl_footerImprint:string = "";

  constructor(){
    this.setLanguageEN();
  }

  public selectLanguage() {
    if (this.selectedLanguage == "en"){
      this.selectedLanguage = "de"
      this.setLanguageDE();

    }else if (this.selectedLanguage == "de") {
      this.selectedLanguage = "en"
      this.setLanguageEN();
    }
  }

  public setLanguageEN(){
      this.sl_languageImg = "../../assets/img/header/german.png";
      this.sl_aboutme = "About me";
      this.sl_skillset = "Skill set";
      this.sl_mywork = "My work";
      this.sl_h1 = "Hello! I am Julian";
      this.sl_scroll = "SCROLL";
      this.sl_h1Lwt = "Let's work together";
      this.sl_description = `
        I am a Front-end developer based in Wetter, Germany.
        I enjoy helping designers and companies bring their ideas into real life.
      `;
      this.sl_description1 = `
        If you think I’d be a good match for your projects, contact me!
      `;
      this.sl_btnLwt = "Send a message";

      this.sl_h1Skillset ="Skill set"
      this.sl_h1Mywork ="My work";
      this.sl_spanMywork ="Feel free to try out my latest development projects and look into their code.";

      this.sl_h1Contact = "Contact";
      this.sl_h2Contact = "Got a problem to solve?";
      this.sl_spanContact = "Contact me through this form. I am interested in hearing you, knowing your ideas and contributing to your projects with my work.";
      this.sl_h3Contact ="Need a Frontend developer? ";
      this.sl_bContact ="Contact me!";

      this.sl_contactName = "Your name";
      this.sl_contactNamerequired = "Your name is required";
      this.sl_contactMail = "Your email";
      this.sl_contactMailrequired = "Your email is required";
      this.sl_contactMessage = "Your message";
      this.sl_contactMessagerequired = "Your message is empty";
      this.sl_contactPrivacy1 = "I've read the ";
      this.sl_contactPrivacy2 = "privacy policy";
      this.sl_contactPrivacy3 = " and agree to the processing of my data as outlined.";
      this.sl_contactPrivacyrequired = "Please accept the privacy policy";
      this.sl_contactBtn = "Say hello ;)";

      this.sl_footerImprint="Imprint";
  }

  public setLanguageDE(){
      this.sl_languageImg = "../../assets/img/header/gb.png";
      this.sl_aboutme = "Über mich";
      this.sl_skillset = "Erfahrung";
      this.sl_mywork = "Projekte";
      this.sl_h1 = "Hallo! Ich bin Julian";
      this.sl_scroll = "SCROLLEN";
      this.sl_h1Lwt = "Das bin ich";
      this.sl_description = `
        Ich bin ein Frontend Entwickler aus Wetter (Hessen).
        Ich unterstütze euch gerne um eure ideen in die tat umzusetzen.
      `;
      this.sl_description1 = `
        Wenn Ihr meine unterstützung benötigt, meldet euch gerne bei mir.
      `;
      this.sl_btnLwt = "Nachricht senden";

      this.sl_h1Skillset = "Erfahrung";
      this.sl_h1Mywork = "Projekte";
      this.sl_spanMywork ="Teste gerne meine letzten Projekte und schaue in den Quellcode.";

      this.sl_h1Contact = "Kontakt";
      this.sl_h2Contact = "Haben Sie ein Problem?";
      this.sl_spanContact = "Kontaktieren Sie mich mit diesem Kontktformular, ich freue mich von Ihnen zu hören.";
      this.sl_h3Contact ="Brauchen Sie einen Enwickler? ";
      this.sl_bContact ="Kontaktieren Sie mich!";

      this.sl_contactName = "Ihr Name";
      this.sl_contactNamerequired = "Ihr Name wird benötigt";
      this.sl_contactMail = "Ihre E-Mail";
      this.sl_contactMailrequired = "Ihre E-Mail wird benötigt";
      this.sl_contactMessage = "Ihre Nachricht";
      this.sl_contactMessagerequired = "Ihre Nachricht ist leer";
      this.sl_contactPrivacy1 = "Ich habe die ";
      this.sl_contactPrivacy2 = "privacy policy";
      this.sl_contactPrivacy3 = " gelesen und stimme zu.";
      this.sl_contactPrivacyrequired = "Bitte akzeptieren Sie die privacy policy";
      this.sl_contactBtn = "Sag hallo ;)";

      this.sl_footerImprint="Impressum";
  }
}
