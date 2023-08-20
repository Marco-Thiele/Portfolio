import { Component, ElementRef, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  inputStates: { [key: string]: { iconSrc: string, valid: boolean } } = {
    name: { iconSrc: '', valid: true },
    email: { iconSrc: '', valid: true },
    message: { iconSrc: '', valid: true }
  };


  @ViewChildren('myForm') myForm: ElementRef | undefined;
  @ViewChildren('nameField') nameField: ElementRef | undefined;
  @ViewChildren('messageField') messageField: ElementRef | undefined;
  @ViewChildren('emailField') emailField: ElementRef | undefined;
  @ViewChildren('sendButton') sendButton: ElementRef | undefined;
  iconSrc: string = '';


  constructor(private renderer: Renderer2, private el: ElementRef) { }


  async sendMail() {
    //action= Url Dateipfad zum Server
    let nameField = this.nameField.nativeElement
    let emailField = this.emailField.nativeElement
    let messageField = this.messageField.nativeElement
    let sendButton = this.sendButton.nativeElement
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    // Animation anzeigen

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('name', emailField.value);
    fd.append('message', messageField.value);
    await fetch('//action= Url Dateipfad zum Server',
      {
        method: 'Post',
        body: fd
      }
    )



    // Text anzeigen Nachricht gesendet
    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
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
