import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('myForm') myForm: ElementRef | undefined;
  @ViewChild('nameField') nameField: ElementRef | undefined;
  @ViewChild('messageField') messageField: ElementRef | undefined;
  @ViewChild('emailField') emailField: ElementRef | undefined;
  @ViewChild('sendButton') sendButton: ElementRef | undefined;
  @ViewChild('mySpinner') mySpinner: ElementRef | undefined;
  @ViewChild('myLoader') myLoader: ElementRef | undefined;
  iconSrc: string = '';

  inputStates: { [key: string]: { iconSrc: string, valid: boolean } } = {
    name: { iconSrc: '', valid: true },
    email: { iconSrc: '', valid: true },
    message: { iconSrc: '', valid: true }
  };

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {

  }


  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    this.disableForm(nameField, emailField, messageField, sendButton);
    this.startSendAnimation();
    this.sendMailToServer(nameField, emailField, messageField)
    this.clearField(nameField, emailField, messageField)
    this.endSendAnimation()
    this.ableForm(nameField, emailField, messageField, sendButton)
    // Text anzeigen Nachricht gesendet

  }


  async sendMailToServer(nameField, emailField, messageField){
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    await fetch('https://marco-thiele.com/send_mail/send_mail.php',
      {
        method: 'Post',
        body: fd
      }
    )
  }


  disableForm(nameField, emailField, messageField, sendButton) {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }


  ableForm(nameField, emailField, messageField, sendButton) {
    nameField.disabled = false;
    messageField.disabled = false;
    emailField.disabled = false;
    sendButton.disabled = false;
  }


  clearField(nameField, emailField, messageField) {
    nameField.value = '';
    messageField.value = '';
    emailField.value = '';
  }


  startSendAnimation() {
    this.addCssClass(this.mySpinner.nativeElement, 'spinner');
    this.addCssClass(this.myLoader.nativeElement, 'loader');
  }

  
  endSendAnimation() {
    this.removeCssClass(this.mySpinner.nativeElement, 'spinner');
    this.removeCssClass(this.myLoader.nativeElement, 'loader');
  }


  checkInputValue(inputField: HTMLInputElement | HTMLTextAreaElement, fieldName: string) {
    const inputValue = inputField.value;
    if (inputValue.length < 3) {
      this.inputStates[fieldName].iconSrc = '../../assets/img/danger.png';
      this.inputStates[fieldName].valid = false;
      this.addCssClass(inputField, 'wrong-input');
      this.removeCssClass(inputField, 'correct-input');
    } else {
      this.inputStates[fieldName].iconSrc = '../../assets/img/correct.png';
      this.inputStates[fieldName].valid = true;
      this.removeCssClass(inputField, 'wrong-input');
      this.addCssClass(inputField, 'correct-input');
    }
  }


  private addCssClass(element: HTMLElement, className: string) {
    this.renderer.addClass(element, className);
  }


  private removeCssClass(element: HTMLElement, className: string) {
    this.renderer.removeClass(element, className);
  }
}
