import { NgModule, Input, ViewChild, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PrivacyComponent } from '../privacy/privacy.component';

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


  @Input() public sl_imprintHeadline:string = "";
  @Input() public sl_imprintP1:string = "";
  @Input() public sl_imprintP2:string = "";
  @Input() public sl_imprintP3:string = "";
  @Input() public sl_imprintP4:string = "";
  @Input() public sl_imprintP5:string = "";
  @Input() public sl_imprintP6:string = "";
  @Input() public sl_imprintP7:string = "";
  @Input() public sl_imprintP8:string = "";
  @Input() public sl_imprintP9:string = "";
  @Input() public sl_imprintP10:string = "";
  @Input() public sl_imprintP11:string = "";
  @Input() public sl_imprintP12:string = "";
  @Input() public sl_imprintP13:string = "";
  @Input() public sl_imprintP14:string = "";


  @Input() public sl_privacyH1:string = "";
  @Input() public sl_privacyH2:string = "";
  @Input() public sl_privacyH21:string = "";
  @Input() public sl_privacyH22:string = "";
  @Input() public sl_privacyH23:string = "";
  @Input() public sl_privacyH24:string = "";
  @Input() public sl_privacyH25:string = "";
  @Input() public sl_privacyH26:string = "";
  @Input() public sl_privacyH3:string = "";
  @Input() public sl_privacyH31:string = "";
  @Input() public sl_privacyA1:string = "";

  @Input() public sl_privacyP1:string = "";
  @Input() public sl_privacyP2:string = "";
  @Input() public sl_privacyP3:string = "";
  @Input() public sl_privacyP4:string = "";
  @Input() public sl_privacyP5:string = "";
  @Input() public sl_privacyP6:string = "";
  @Input() public sl_privacyP7:string = "";
  @Input() public sl_privacyP8:string = "";
  @Input() public sl_privacyP9:string = "";
  @Input() public sl_privacyP10:string = "";
  @Input() public sl_privacyP11:string = "";
  @Input() public sl_privacyP12:string = "";
  @Input() public sl_privacyP13:string = "";
  @Input() public sl_privacyP14:string = "";
  @Input() public sl_privacyP15:string = "";
  @Input() public sl_privacyP16:string = "";
  @Input() public sl_privacyP17:string = "";
  @Input() public sl_privacyP18:string = "";
  @Input() public sl_privacyP19:string = "";
  @Input() public sl_privacyP20:string = "";
  @Input() public sl_privacyP21:string = "";

  @Input() public sl_privacyLi1:string = "";
  @Input() public sl_privacyLi2:string = "";
  @Input() public sl_privacyLi3:string = "";
  @Input() public sl_privacyLi4:string = "";
  @Input() public sl_privacyLi5:string = "";
  @Input() public sl_privacyLi6:string = "";
  @Input() public sl_privacyLi7:string = "";
  @Input() public sl_privacyLi8:string = "";
  @Input() public sl_privacyLi9:string = "";
  @Input() public sl_privacyLi10:string = "";
  @Input() public sl_privacyLi11:string = "";
  @Input() public sl_privacyLi12:string = "";
  @Input() public sl_privacyLi13:string = "";
  @Input() public sl_privacyLi14:string = "";
  @Input() public sl_privacyLi15:string = "";
  @Input() public sl_privacyLi16:string = "";
  @Input() public sl_privacyLi17:string = "";
  @Input() public sl_privacyLi18:string = "";
  @Input() public sl_privacyLi19:string = "";
  @Input() public sl_privacyLi20:string = "";
  @Input() public sl_privacyLi21:string = "";
  @Input() public sl_privacyLi22:string = "";
  @Input() public sl_privacyLi23:string = "";
  @Input() public sl_privacyLi24:string = "";
  @Input() public sl_privacyLi25:string = "";
  @Input() public sl_privacyLi26:string = "";
  @Input() public sl_privacyLi27:string = "";
  @Input() public sl_privacyLi28:string = "";
  @Input() public sl_privacyLi29:string = "";
  @Input() public sl_privacyLi30:string = "";
  @Input() public sl_privacyLi31:string = "";
  @Input() public sl_privacyLi32:string = "";
  @Input() public sl_privacyLi33:string = "";
  @Input() public sl_privacyLi34:string = "";
  @Input() public sl_privacyLi341:string = "";
  @Input() public sl_privacyLi342:string = "";
  @Input() public sl_privacyLi35:string = "";
  @Input() public sl_privacyLi36:string = "";
  @Input() public sl_privacyLi37:string = "";
  @Input() public sl_privacyLi38:string = "";
  @Input() public sl_privacyLi39:string = "";
  @Input() public sl_privacyLi40:string = "";
  @Input() public sl_privacyLi41:string = "";
  @Input() public sl_privacyLi42:string = "";
  @Input() public sl_privacyLi43:string = "";
  @Input() public sl_privacyLi44:string = "";
  @Input() public sl_privacyLi45:string = "";
  @Input() public sl_privacyLi46:string = "";
  @Input() public sl_privacyLi47:string = "";
  @Input() public sl_privacyLi48:string = "";
  @Input() public sl_privacyLi49:string = "";
  @Input() public sl_privacyLi50:string = "";
  @Input() public sl_privacyLi51:string = "";
  @Input() public sl_privacyLi52:string = "";
  @Input() public sl_privacyLi53:string = "";
  @Input() public sl_privacyLi531:string = "";
  @Input() public sl_privacyLi54:string = "";
  @Input() public sl_privacyLi55:string = "";
  @Input() public sl_privacyLi56:string = "";
  @Input() public sl_privacyLi561:string = "";
  @Input() public sl_privacyLi57:string = "";
  @Input() public sl_privacyLi58:string = "";


  @Input() public sl_footerImprint:string = "";


  constructor(private router: Router){
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


    this.sl_imprintHeadline = "Imprint";
    this.sl_imprintP1 = "Information according to § 5 TMG";
    this.sl_imprintP2 = "Represented by: ";
    this.sl_imprintP3 = "Contact: ";
    this.sl_imprintP4 = "Disclaimer:";
    this.sl_imprintP5 = "Liability for Contents";
    this.sl_imprintP6 = `
      The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness,
      and timeliness of the contents. As a service provider, we are responsible for our own content on these pages according
      to § 7 para.1 TMG under the general laws. However, according to §§ 8 to 10 TMG, we are not obligated as a service
      provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal
      activity. Obligations to remove or block the use of information under general laws remain unaffected by this. However,
      liability in this regard is only possible from the point in time at which we become aware of a specific infringement.
      Upon becoming aware of such violations, we will remove these contents immediately.
    `;


    this.sl_imprintP7 = "Liability for Links";
    this.sl_imprintP8 = `
      Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we
      cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always
      responsible for the content of the pages. The linked pages were checked for possible legal violations at the time of
      linking. Illegal contents were not recognizable at the time of linking. However, permanent content control of the linked
      pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will
      remove such links immediately.
    `;
    this.sl_imprintP9 = "Copyright";
    this.sl_imprintP10 = `
      The contents and works created by the site operators on these pages are subject to German copyright law. The duplication,
      processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the
      respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar
      as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular,
      third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us
      accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
    `;
    this.sl_imprintP11 = "Data Protection";
    this.sl_imprintP12 = `
      The use of our website is usually possible without providing personal data. Insofar as personal data (such as name, address,
      or email addresses) is collected on our pages, this is always done on a voluntary basis as far as possible. These data will
      not be passed on to third parties without your explicit consent.
    `;
    this.sl_imprintP13 = `
      We point out that data transmission on the Internet (e.g., when communicating by e-mail) can have security gaps. Complete
      protection of data against access by third parties is not possible.
    `;
    this.sl_imprintP14 = `
      The use of contact data published within the scope of the imprint obligation by third parties for sending unsolicited
      advertising and information materials is hereby expressly contradicted. The operators of the pages expressly reserve the
      right to take legal action in the event of unsolicited sending of advertising information, such as spam e-mails.
    `;

    this.sl_privacyH1 = "Privacy Policy";
    this.sl_privacyP1 = "Status: February 12, 2024";
    this.sl_privacyH2 = "Table of Contents";
    this.sl_privacyLi1 = "Responsible Party";
    this.sl_privacyLi2 = "Overview of Processing";
    this.sl_privacyLi3 = "Relevant Legal Bases";
    this.sl_privacyLi4 = "Security Measures";
    this.sl_privacyLi5 = "Contact and Request Management";
    this.sl_privacyLi6 = "Presence in Social Networks (Social Media)";
    this.sl_privacyH21 = "Responsible Party";
    this.sl_privacyP2 = "Julian Klee";
    this.sl_privacyP3 = "Am Aspherfeld 23";
    this.sl_privacyP4 = "35083 Wetter";
    this.sl_privacyA1 = "Imprint";
    this.sl_privacyH22 = "Overview of Processing";
    this.sl_privacyP5 = "The following overview summarizes the types of processed data and the purposes of their processing and refers to the affected persons.";
    this.sl_privacyP6 = "Types of Processed Data";
    this.sl_privacyLi7 = "Contact data.";
    this.sl_privacyLi8 = "Content data.";
    this.sl_privacyLi9 = "Usage data.";
    this.sl_privacyLi10 = "Meta, communication, and procedural data.";
    this.sl_privacyH3 = "Categories of Data Subjects";
    this.sl_privacyLi11 = "Communication partners.";
    this.sl_privacyLi12 = "Users.";
    this.sl_privacyH31 = "Purposes of Processing";
    this.sl_privacyLi13 = "Contact requests and communication.";
    this.sl_privacyLi14 = "Management and response to inquiries.";
    this.sl_privacyLi15 = "Feedback.";
    this.sl_privacyLi16 = "Marketing.";
    this.sl_privacyLi17 = "Provision of our online offer and user-friendliness.";
    this.sl_privacyH23 = "Relevant Legal Bases";
    this.sl_privacyP7 = "Relevant legal bases under the GDPR:";
    this.sl_privacyP8 = "The following provides an overview of the legal bases of the GDPR on which we process personal data. Please note that national data protection regulations in your or our country of residence or domicile may also apply in addition to the provisions of the GDPR. If more specific legal bases are relevant in individual cases, we will inform you of these in the privacy policy.";
    this.sl_privacyLi18 = "Performance of a contract and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR)";
    this.sl_privacyLi19 = "The processing is necessary for the performance of a contract to which the data subject is a party or for the implementation of pre-contractual measures taken at the request of the data subject.";
    this.sl_privacyLi20 = "Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR)";
    this.sl_privacyLi21 = "The processing is necessary to protect the legitimate interests of the controller or a third party, unless these interests are overridden by the interests or fundamental rights and freedoms of the data subject that require the protection of personal data.";
    this.sl_privacyLi22 = "National data protection regulations in Germany:";
    this.sl_privacyLi23 = "In addition to the data protection regulations of the GDPR, national data protection regulations apply in Germany. This includes, in particular, the Federal Data Protection Act (Bundesdatenschutzgesetz – BDSG). The BDSG contains specific regulations on the right to information, the right to deletion, the right to object, the processing of special categories of personal data, processing for other purposes, and transmission as well as automated decision-making in individual cases including profiling. Furthermore, data protection laws of individual federal states may also apply.";
    this.sl_privacyP9 = "Note on the applicability of GDPR and Swiss DPA:";
    this.sl_privacyP10 = "These data protection notices serve both to provide information under the Swiss Federal Act on Data Protection (Swiss DPA) and under the General Data Protection Regulation (GDPR). For this reason, please note that due to broader spatial applicability and comprehensibility, the terms of the GDPR are used. In particular, instead of the terms used in the Swiss DPA 'processing' of 'personal data', 'overriding interest' and 'particularly sensitive personal data', the terms 'processing' of 'personal data' as well as 'legitimate interest' and 'special categories of data' used in the GDPR are used. The legal meaning of the terms, however, continues to be determined under the Swiss DPA within the scope of its applicability.";
    this.sl_privacyH24 = "Security Measures";
    this.sl_privacyP11 = "We take appropriate technical and organizational measures to ensure a level of security appropriate to the risk, in accordance with legal requirements, taking into account the state of the art, the implementation costs, the nature, scope, circumstances, and purposes of the processing, as well as the varying likelihood and severity of the threat to the rights and freedoms of natural persons.";
    this.sl_privacyP12 = "The measures include, in particular, securing the confidentiality, integrity, and availability of data by controlling physical and electronic access to the data as well as access, input, transmission, availability, and separation of the data. Furthermore, we have established procedures that ensure the exercise of data subjects' rights, the deletion of data, and responses to data threats. Additionally, we consider the protection of personal data already in the development or selection of hardware, software, and procedures, according to the principle of data protection through technology design and data protection-friendly default settings.";
    this.sl_privacyP13 = "TLS/SSL encryption (https): To protect user data transmitted via our online services, we use TLS/SSL encryption. Secure Sockets Layer (SSL) is the standard technology for securing internet connections by encrypting the data transmitted between a website or app and a browser (or between two servers). Transport Layer Security (TLS) is an updated and more secure version of SSL. Hyper Text Transfer Protocol Secure (HTTPS) is displayed in the URL when a website is secured by an SSL/TLS certificate.";
    this.sl_privacyH25 = "Contact and Inquiry Management";
    this.sl_privacyP14 = "When contacting us (e.g., by post, contact form, email, phone, or via social media) as well as in the context of existing user and business relationships, the information of the requesting persons is processed to the extent necessary to respond to the contact inquiries and any requested measures.";
    this.sl_privacyLi24 = "Processed Data Types:";
    this.sl_privacyLi25 = "Contact data (e.g., email addresses, phone numbers); content data (e.g., entries in online forms); usage data (e.g., visited websites, interest in content, access times); meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, consent status).";
    this.sl_privacyLi26 = "Affected Persons:";
    this.sl_privacyLi27 = "Communication partners.";
    this.sl_privacyLi28 = "Purposes of Processing:";
    this.sl_privacyLi29 = "Contact inquiries and communication; management and response to inquiries; feedback (e.g., collecting feedback via online form). Provision of our online offer and user-friendliness.";    ;
    this.sl_privacyLi30 = "Legal Bases:";
    this.sl_privacyLi31 = "Legitimate Interests (Art. 6 para. 1 sentence 1 lit. f) GDPR). Contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR).";
    this.sl_privacyLi32 = "Additional Notes on Processing Procedures, Methods, and Services:";
    this.sl_privacyLi33 = "Contact Form: ";
    this.sl_privacyLi34 = "When users contact us via our contact form, email, or other communication methods, we process the data communicated to us in this context to handle the communicated request; <span class=''><strong>Legal Bases:</strong> Contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR), Legitimate Interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).";
    this.sl_privacyLi341 = "Legal Bases:";
    this.sl_privacyLi342 = "Contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR), Legitimate Interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).";
    this.sl_privacyP15 = "Presences in Social Networks (Social Media)";
    this.sl_privacyP16 = "We maintain online presences within social networks and process user data in this context to communicate with users active there or to offer information about us.";
    this.sl_privacyP17 = "We point out that user data may be processed outside the European Union. This may pose risks for users because it could, for example, make it more difficult to enforce users' rights.";
    this.sl_privacyP18 = "Furthermore, user data within social networks is generally processed for market research and advertising purposes. For instance, usage profiles can be created based on user behavior and resulting interests. These usage profiles can, in turn, be used to display advertisements within and outside the networks that presumably match the users' interests. For these purposes, cookies are usually stored on the users' computers, in which the usage behavior and interests of the users are stored. Additionally, data can also be stored in the usage profiles independently of the devices used by the users (especially if the users are members of the respective platforms and are logged in).";
    this.sl_privacyP19 = "For a detailed presentation of the respective forms of processing and the opt-out options, we refer to the privacy policies and information provided by the operators of the respective networks.";
    this.sl_privacyP20 = "We also point out that inquiries for information and the assertion of data subject rights can be most effectively addressed to the providers. Only the providers have access to the users' data and can take appropriate measures and provide information directly. Should you still need help, you can contact us.";
    this.sl_privacyLi35 = "Processed Data Types:";
    this.sl_privacyLi36 = "Contact data (e.g., email addresses, phone numbers); content data (e.g., entries in online forms); usage data (e.g., visited websites, interest in content, access times); meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, consent status).";
    this.sl_privacyLi37 = "Affected Persons:";
    this.sl_privacyLi38 = "Users (e.g., website visitors, users of online services).";
    this.sl_privacyLi39 = "Purposes of Processing:";
    this.sl_privacyLi40 = "Contact requests and communication; feedback (e.g., collecting feedback via online form). Marketing.";
    this.sl_privacyLi41 = "Legal Bases:";
    this.sl_privacyLi42 = "Legitimate interests (Art. 6(1) sentence 1 lit. f) GDPR).";
    this.sl_privacyP21 = "Further Notes on Processing Procedures, Methods, and Services:";
    this.sl_privacyLi43 = "LinkedIn:";
    this.sl_privacyLi44 = "Social network;";
    this.sl_privacyLi45 = "Service Provider:";
    this.sl_privacyLi46 = "LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Ireland;";
    this.sl_privacyLi47 = "Legal Bases:";
    this.sl_privacyLi48 = "Legitimate interests (Art. 6(1) sentence 1 lit. f) GDPR);";
    this.sl_privacyLi49 = "Website:";
    this.sl_privacyLi50 = "Privacy Policy:";
    this.sl_privacyLi51 = "Basis for Third Country Transfer:";
    this.sl_privacyLi52 = "EU-US Data Privacy Framework (DPF),";
    this.sl_privacyLi53 = "Standard Contractual Clauses (";
    this.sl_privacyLi531 = ");";
    this.sl_privacyLi54 = "Opt-Out Option:";
    this.sl_privacyLi55 = "Further Information:";
    this.sl_privacyLi56 = "We are jointly responsible with LinkedIn Ireland Unlimited Company for the collection (but not the further processing) of data from visitors to our LinkedIn profiles for the purpose of creating 'Page Insights' (statistics).";
    this.sl_privacyLi561 = "This data includes information about the types of content users view or interact with, or the actions they take, as well as information about the devices used by users (e.g., IP addresses, operating system, browser type, language settings, cookie data) and information from user profiles, such as job function, country, industry, seniority, company size, and employment status. Privacy information regarding LinkedIn's processing of user data can be found in LinkedIn's privacy notices:";
    this.sl_privacyLi57 = `We have concluded a special agreement with LinkedIn Ireland ("Page Insights Joint Controller Addendum (the 'Addendum')", `;
    this.sl_privacyLi58 = "), which particularly regulates which security measures LinkedIn must observe and in which LinkedIn agrees to fulfill data subject rights (i.e., users can, for example, direct information or deletion requests directly to LinkedIn). The rights of users (in particular, the right to information, deletion, objection, and complaint to the competent supervisory authority) are not restricted by the agreements with LinkedIn. The joint responsibility is limited to the collection of data by and transmission to Ireland Unlimited Company, a company based in the EU. The further processing of data is the sole responsibility of Ireland Unlimited Company, which specifically includes the transfer of data to the parent company LinkedIn Corporation in the USA.";
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

      this.sl_imprintHeadline ="Impressum";
      this.sl_imprintP1 = "Angaben gemäß § 5 TMG";
      this.sl_imprintP2 = "Vertreten durch: ";
      this.sl_imprintP3 = "Kontakt: ";
      this.sl_imprintP4 = "Haftungsausschluss:";
      this.sl_imprintP5 = "Haftung für Inhalte";
      this.sl_imprintP6 = `
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
        der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
        Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
        Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
        Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
        von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      `;
      this.sl_imprintP7 = "Haftung für Links";
      this.sl_imprintP8 = `
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
        können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
        der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
        erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
        entfernen.
      `;
      this.sl_imprintP9 = "Urheberrecht";
      this.sl_imprintP10 = `
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
        bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
        nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom
        Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
        gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend
        entfernen.
      `;
      this.sl_imprintP11 = "Datenschutz";
      this.sl_imprintP12 = `
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten
        personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit
        möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte
        weitergegeben.
      `;
      this.sl_imprintP13 = `
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
      `;
      this.sl_imprintP14 = `
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht
        ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die
        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
        Werbeinformationen, etwa durch Spam-Mails, vor.
      `;

      this.sl_privacyH1 = "Datenschutzerklärung";
      this.sl_privacyP1 = "Stand: 12. Februar 2024";
      this.sl_privacyH2 = "Inhaltsübersicht";

      this.sl_privacyLi1 = "Verantwortlicher";
      this.sl_privacyLi2 = "Übersicht der Verarbeitungen";
      this.sl_privacyLi3 = "Maßgebliche Rechtsgrundlagen";
      this.sl_privacyLi4 = "Sicherheitsmaßnahmen";
      this.sl_privacyLi5 = "Kontakt- und Anfragenverwaltung";
      this.sl_privacyLi6 = "Präsenzen in sozialen Netzwerken (Social Media)";

      this.sl_privacyH21 = "Verantwortlicher";
      this.sl_privacyP2 = "Julian Klee";
      this.sl_privacyP3 = "Am Aspherfeld 23";
      this.sl_privacyP4 = "35083 Wetter";
      this.sl_privacyA1 = "Impressum";

      this.sl_privacyH22 = "Übersicht der Verarbeitungen";
      this.sl_privacyP5 = "Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.";
      this.sl_privacyP6 = "Arten der verarbeiteten Daten";
      this.sl_privacyLi7 = "Kontaktdaten.";
      this.sl_privacyLi8 = "Inhaltsdaten.";
      this.sl_privacyLi9 = "Nutzungsdaten.";
      this.sl_privacyLi10 = "Meta-, Kommunikations- und Verfahrensdaten.";

      this.sl_privacyH3 = "Kategorien betroffener Personen";
      this.sl_privacyLi11 = "Kommunikationspartner.";
      this.sl_privacyLi12 = "Nutzer.";
      this.sl_privacyH31 = "Zwecke der Verarbeitung";
      this.sl_privacyLi13 = "Kontaktanfragen und Kommunikation.";
      this.sl_privacyLi14 = "Verwaltung und Beantwortung von Anfragen.";
      this.sl_privacyLi15 = "Feedback.";
      this.sl_privacyLi16 = "Marketing.";
      this.sl_privacyLi17 = "Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.";
      this.sl_privacyH23 = "Maßgebliche Rechtsgrundlagen";
      this.sl_privacyP7 = "Maßgebliche Rechtsgrundlagen nach der DSGVO: ";
      this.sl_privacyP8 = `
        Im Folgenden erhalten Sie eine Übersicht der
        Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis,
        dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten
        können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
        Datenschutzerklärung mit.
      `;
      this.sl_privacyLi18 = "Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)";
      this.sl_privacyLi19 = `
        - Die
        Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur
        Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.
      `;
      this.sl_privacyLi20 = "Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)";
      this.sl_privacyLi21 = `
        - Die Verarbeitung ist zur Wahrung der
        berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder
        Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern,
        überwiegen.
      `;
      this.sl_privacyLi22 = "Nationale Datenschutzregelungen in Deutschland: ";
      this.sl_privacyLi23 = `
        Zusätzlich zu den Datenschutzregelungen der DSGVO
        gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor
        Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
        insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung
        besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie
        automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze
        der einzelnen Bundesländer zur Anwendung gelangen.
      `;
      this.sl_privacyP9 = "Hinweis auf Geltung DSGVO und Schweizer DSG: ";
      this.sl_privacyP10 = `
        Diese Datenschutzhinweise dienen sowohl der
        Informationserteilung nach dem schweizerischen Bundesgesetz über den Datenschutz (Schweizer DSG) als auch nach der
        Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass aufgrund der breiteren
        räumlichen Anwendung und Verständlichkeit die Begriffe der DSGVO verwendet werden. Insbesondere statt der im Schweizer
        DSG verwendeten Begriffe „Bearbeitung" von „Personendaten", "überwiegendes Interesse" und "besonders schützenswerte
        Personendaten" werden die in der DSGVO verwendeten Begriffe „Verarbeitung" von „personenbezogenen Daten" sowie
        "berechtigtes Interesse" und "besondere Kategorien von Daten" verwendet. Die gesetzliche Bedeutung der Begriffe wird
        jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.
      `;

      this.sl_privacyH24 = "Sicherheitsmaßnahmen";
      this.sl_privacyP11 = `
        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der
        Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der
        unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher
        Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu
        gewährleisten.
      `;

      this.sl_privacyP12 = `
        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
        Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe,
        der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die
        eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten
        gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl
        von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch
        datenschutzfreundliche Voreinstellungen.
      `;
      this.sl_privacyP13 = `
        TLS/SSL-Verschlüsselung (https): Um die Daten der Benutzer, die über unsere Online-Dienste übertragen werden, zu
        schützen, verwenden wir TLS/SSL-Verschlüsselung. Secure Sockets Layer (SSL) ist die Standardtechnologie zur Sicherung
        von Internetverbindungen durch Verschlüsselung der zwischen einer Website oder App und einem Browser (oder zwischen
        zwei Servern) übertragenen Daten. Transport Layer Security (TLS) ist eine aktualisierte und sicherere Version von SSL.
        Hyper Text Transfer Protocol Secure (HTTPS) wird in der URL angezeigt, wenn eine Website durch ein SSL/TLS-Zertifikat
        gesichert ist.
      `;

      this.sl_privacyH25 = "Kontakt- und Anfragenverwaltung";
      this.sl_privacyP14 = `
        Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im
        Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit
        dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
      `;
      this.sl_privacyLi24 = "Verarbeitete Datenarten:";
      this.sl_privacyLi25 = `
        Kontaktdaten (z. B. E-Mail, Telefonnummern); Inhaltsdaten (z. B.
        Eingaben in Onlineformularen); Nutzungsdaten (z. B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten);
        Meta-, Kommunikations- und Verfahrensdaten (z. .B. IP-Adressen, Zeitangaben, Identifikationsnummern,
        Einwilligungsstatus).
      `;

      this.sl_privacyLi26 = "Betroffene Personen:";
      this.sl_privacyLi27 = "Kommunikationspartner.";
      this.sl_privacyLi28 = "Zwecke der Verarbeitung:";
      this.sl_privacyLi29 = `
        Kontaktanfragen und Kommunikation; Verwaltung und Beantwortung von
        Anfragen; Feedback (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung unseres Onlineangebotes und
        Nutzerfreundlichkeit.
      `;
      this.sl_privacyLi30 = "Rechtsgrundlagen:";
      this.sl_privacyLi31 = `
        Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
        Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
      `;
      this.sl_privacyLi32 = "Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:";
      this.sl_privacyLi33 = "Kontaktformular: ";
      this.sl_privacyLi34 = `
        Wenn Nutzer über unser Kontaktformular, E-Mail oder andere Kommunikationswege
        mit uns in Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang mitgeteilten Daten zur Bearbeitung des
        mitgeteilten Anliegens; <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
      `;

      this.sl_privacyLi341 = "Rechtsgrundlagen:"
      this.sl_privacyLi342 = `
        Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
      `;

      this.sl_privacyP15 = "Präsenzen in sozialen Netzwerken (Social Media)";
      this.sl_privacyP16 = `
        Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Daten der Nutzer, um
        mit den dort aktiven Nutzern zu kommunizieren oder um Informationen über uns anzubieten.
      `;
      this.sl_privacyP17 = `
        Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden
        können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so z. B. die Durchsetzung der Rechte der Nutzer
        erschwert werden könnte.
      `;
      this.sl_privacyP18 = `
        Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und Werbezwecke
        verarbeitet. So können z. B. anhand des Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer
        Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum verwendet werden, um z. B. Werbeanzeigen
        innerhalb und außerhalb der Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen
        Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die
        Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten unabhängig der von den
        Nutzern verwendeten Geräte gespeichert werden (insbesondere, wenn die Nutzer Mitglieder der jeweiligen Plattformen
        sind und bei diesen eingeloggt sind).
      `;
      this.sl_privacyP19 = `
        Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der Widerspruchsmöglichkeiten (Opt-Out)
        verweisen wir auf die Datenschutzerklärungen und Angaben der Betreiber der jeweiligen Netzwerke.
      `;
      this.sl_privacyP20 = `
        Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen wir darauf hin, dass diese am
        effektivsten bei den Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils Zugriff auf die Daten der
        Nutzer und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen,
        dann können Sie sich an uns wenden.
      `;
      this.sl_privacyLi35 = "Verarbeitete Datenarten:";
      this.sl_privacyLi36 = `
        Kontaktdaten (z. B. E-Mail, Telefonnummern); Inhaltsdaten (z. B.
        Eingaben in Onlineformularen); Nutzungsdaten (z. B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten);
        Meta-, Kommunikations- und Verfahrensdaten (z. .B. IP-Adressen, Zeitangaben, Identifikationsnummern,
        Einwilligungsstatus).
      `;
      this.sl_privacyLi37 = "Betroffene Personen:";
      this.sl_privacyLi38 = "Nutzer (z. .B. Webseitenbesucher, Nutzer von Onlinediensten).";
      this.sl_privacyLi39 = "Zwecke der Verarbeitung:";
      this.sl_privacyLi40 = "Kontaktanfragen und Kommunikation; Feedback (z. B. Sammeln von Feedback via Online-Formular). Marketing.";
      this.sl_privacyLi41 = "Rechtsgrundlagen:";
      this.sl_privacyLi42 = "Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).";
      this.sl_privacyP21 = "Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:";
      this.sl_privacyLi43 = "LinkedIn: ";
      this.sl_privacyLi44 = "Soziales Netzwerk; ";
      this.sl_privacyLi45 = "Dienstanbieter:";
      this.sl_privacyLi46 = `
        LinkedIn Ireland Unlimited Company,
        Wilton Place, Dublin 2, Irland;
      `;
      this.sl_privacyLi47 = "Rechtsgrundlagen:";
      this.sl_privacyLi48 = `
        Berechtigte Interessen (Art. 6
        Abs. 1 S. 1 lit. f) DSGVO);
      `;
      this.sl_privacyLi49 = "Website:";
      this.sl_privacyLi50 = "Datenschutzerklärung:";

      this.sl_privacyLi51 = "Grundlage Drittlandübermittlung:";
      this.sl_privacyLi52 = "EU-US Data Privacy Framework (DPF),";
      this.sl_privacyLi53 = "Standardvertragsklauseln (";
      this.sl_privacyLi531 = ");";

      this.sl_privacyLi54 = "Widerspruchsmöglichkeit (Opt-Out):";

      this.sl_privacyLi55 = "Weitere Informationen:";
      this.sl_privacyLi56 = `
        Wir sind gemeinsam mit LinkedIn Irland Unlimited Company für die Erhebung (jedoch nicht
        die weitere Verarbeitung) von Daten der Besucher, die zu Zwecken der Erstellung der „Page-Insights" (Statistiken)
        unserer LinkedIn-Profile verantwortlich.
      `;
      this.sl_privacyLi561 = `Zu diesen Daten gehören Informationen zu den Arten von Inhalten, die
        Nutzer sich ansehen oder mit denen sie interagieren, oder die von ihnen vorgenommenen Handlungen sowie Informationen
        über die von den Nutzern genutzten Geräte (z. B. IP-Adressen, Betriebssystem, Browsertyp, Spracheinstellungen,
        Cookie-Daten) und Angaben aus dem Profil der Nutzer, wie Berufsfunktion, Land, Branche, Hierarchieebene,
        Unternehmensgröße und Beschäftigungsstatus. Datenschutzinformationen zur Verarbeitung von Daten der Nutzer durch
        LinkedIn können den Datenschutzhinweisen von LinkedIn entnommen werden:
      `;

      this.sl_privacyLi57 = 'Wir haben mit LinkedIn Irland eine spezielle Vereinbarung abgeschlossen ("Page Insights Joint Controller Addendum (the ‚Addendum‘)", ';

      this.sl_privacyLi58 = `
        ), in der insbesondere geregelt
        wird, welche Sicherheitsmaßnahmen LinkedIn beachten muss und in der LinkedIn sich bereit erklärt hat die
        Betroffenenrechte zu erfüllen (d. h. Nutzer können z. .B. Auskünfte oder Löschungsanfragen direkt an LinkedIn
        richten). Die Rechte der Nutzer (insbesondere auf Auskunft, Löschung, Widerspruch und Beschwerde bei zuständiger
        Aufsichtsbehörde), werden durch die Vereinbarungen mit LinkedIn nicht eingeschränkt. Die gemeinsame
        Verantwortlichkeit beschränkt sich auf die Erhebung der Daten durch und die Übermittlung an die Ireland Unlimited
        Company, ein Unternehmen mit Sitz in der EU. Die weitere Verarbeitung der Daten obliegt ausschließlich der Ireland
        Unlimited Company, was insbesondere die Übermittlung der Daten an die Muttergesellschaft LinkedIn Corporation in den
        USA betrifft.
      `;

      this.sl_footerImprint="Impressum";
  }
}
