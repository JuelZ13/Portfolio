import { Component,inject,Inject,Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageModule } from '../language/language.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  inputName:string = "";
  @Input() validName:boolean = true;
  @Input() nameImg:string = "../../assets/img/contact/x.png";
  inputMail:string = "";
  @Input() validMail:boolean = true;
  @Input() mailImg:string = "../../assets/img/contact/x.png";
  inputMessage:string = "";
  @Input() validMessage:boolean = true;
  @Input() messageImg:string = "../../assets/img/contact/x.png";
  checkboxPrivacy: boolean = false;
  @Input() validPrivacy:boolean = true;
  @Input() validAll:boolean = false;
  @Input() formActive:boolean = false;

  constructor(public languageModule: LanguageModule){}

  checkInput() {
   this.formActive = true;
   this.checkname();
   this.checkMail();
   this.checkMessage();
   this.checkPrivacy();

   if(this.validName && this.validMail && this.validMessage && !this.validPrivacy){
    this.validAll = true;
   }else{
    this.validAll = false;
   }

  }

  checkname() {
    if (this.inputName != ""){
      this.validName = true;
      this.nameImg = "../../assets/img/contact/check.png";
    }else{
      this.validName = false;
      this.nameImg = "../../assets/img/contact/x.png";
    }
  }

  checkMail() {
    if (this.checkMailPattern(this.inputMail)){
      this.validMail = true;
      this.mailImg = "../../assets/img/contact/check.png";
    }else{
      this.validMail = false;
      this.mailImg = "../../assets/img/contact/x.png";
    }
  }

  checkMailPattern(value: string){
    let pattern = new RegExp("[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\\.[a-zA-Z]{2,}");
    return pattern.test(value);
  }

  checkMessage() {
    if (this.inputMessage != ""){
      this.validMessage = true;
      this.messageImg = "../../assets/img/contact/check.png";
    }else{
      this.validMessage = false;
      this.messageImg = "../../assets/img/contact/x.png";
    }
  }

  checkPrivacy() {
    if (this.checkboxPrivacy === true){
      this.validPrivacy = true;
    }else{
      this.validPrivacy = false;
    }
  }

  http = inject(HttpClient);

  mailTest = false;
  messageSwtich = false;
  post = {
    endPoint: 'https://portfolio.it-klee.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  sendMail(ngForm:NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      let contactData = {
        name: this.inputName,
        email: this.inputMail,
        message: this.inputMessage
      }

      this.http.post(this.post.endPoint, this.post.body(contactData))
          .subscribe({
            next: (response: any) => {
              ngForm.resetForm();
              this.formActive = false;
            },
            error: (error: any) => {
              console.error(error);
            },
            complete: () => {
              this.messageSwtich = true;
              setTimeout(()=> {
                this.messageSwtich = false;

              },2000);
            },
          });
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
        ngForm.resetForm();
      }
    }
}

