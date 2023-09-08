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
  @ViewChild('messageSuccessfully') messageSuccessfully: ElementRef | undefined;
  iconSrc: string = '';

  inputStates: { [key: string]: { iconSrc: string, valid: boolean } } = {
    name: { iconSrc: '', valid: true },
    email: { iconSrc: '', valid: true },
    message: { iconSrc: '', valid: true }
  };

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {

  }

  /**
   * initialized all viewchilds and functions for sending form 
   * 
   */
  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    this.disableForm(nameField, emailField, messageField, sendButton);
    this.startSendAnimation();
    this.sendMailToServer(nameField, emailField, messageField);
    this.clearField(nameField, emailField, messageField);
    this.endSendAnimation();
    this.ableForm(nameField, emailField, messageField, sendButton);
    this.massegeSuccsess();
  }


  /**
   * send the mail the server with the inputs values
   * 
   * @param nameField ElementRef 
   * @param emailField ElementRef
   * @param messageField ElementRef 
   */
  async sendMailToServer(nameField: { value: string | Blob; }, emailField: { value: string | Blob; }, messageField: { value: string | Blob; }) {
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


  /**
   * Disabled the form
   * 
   * @param nameField ElementRef
   * @param emailField ElementRef
   * @param messageField ElementRef
   * @param sendButton ElementRef
   */
  disableForm(nameField: { disabled: boolean; }, emailField: { disabled: boolean; }, messageField: { disabled: boolean; }, sendButton: { disabled: boolean; }) {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }


  /**
   * Able the form
   * 
   * @param nameField ElementRef
   * @param emailField ElementRef
   * @param messageField ElementRef
   * @param sendButton ElementRef
   */
  ableForm(nameField: { disabled: boolean; }, emailField: { disabled: boolean; }, messageField: { disabled: boolean; }, sendButton: { disabled: boolean; }) {
    nameField.disabled = false;
    messageField.disabled = false;
    emailField.disabled = false;
    sendButton.disabled = false;
  }


  /**
   * Cleared all inputs
   * 
   * @param nameField ElementRef
   * @param emailField ElementRef
   * @param messageField ElementRef
   */
  clearField(nameField: { value: string; }, emailField: { value: string; }, messageField: { value: string; }) {
    nameField.value = '';
    messageField.value = '';
    emailField.value = '';
    this.clearInputValue();

  }


  clearInputValue() {
    this.removeCssClass(this.nameField.nativeElement, 'correct-input');
    this.removeCssClass(this.emailField.nativeElement, 'correct-input');
    this.removeCssClass(this.messageField.nativeElement, 'correct-input');
    this.removeCssClass(this.nameField.nativeElement, 'wrong-input');
    this.removeCssClass(this.emailField.nativeElement, 'wrong-input');
    this.removeCssClass(this.messageField.nativeElement, 'wrong-input');
    this.iconSrc = '';
    this.checkInputValue(this.nameField.nativeElement, 'name')
    this.checkInputValue(this.emailField.nativeElement, 'email')
    this.checkInputValue(this.messageField.nativeElement, 'message')
  }


  /**
   * Start the animation 
   * 
   */
  startSendAnimation() {
    this.addCssClass(this.mySpinner.nativeElement, 'spinner');
    this.addCssClass(this.myLoader.nativeElement, 'loader');
  }


  /**
   * Stop the animation
   * 
   */
  endSendAnimation() {
    this.removeCssClass(this.mySpinner.nativeElement, 'spinner');
    this.removeCssClass(this.myLoader.nativeElement, 'loader');
  }


  /**
   *Checked if the input values are long enough
   *  
   * @param inputField ElementRef
   * @param fieldName String
   */
  checkInputValue(inputField: HTMLInputElement | HTMLTextAreaElement, fieldName: string) {
    const inputValue = inputField.value;
    if (inputValue.length == 0) {
      this.inputStates[fieldName].iconSrc = '';
    }else if (inputValue.length > 0 && inputValue.length < 3) {
      this.checkInputValueWrong(inputField, fieldName)
    } else {
      this.checkInputValueCorrect(inputField, fieldName)
    }
  }


  /**
   * Set the Inputfield to wrong
   * 
   * @param inputField ElementRef
   * @param fieldName String
   */
  checkInputValueWrong(inputField: HTMLInputElement | HTMLTextAreaElement, fieldName: string){
    this.inputStates[fieldName].iconSrc = '../../assets/img/danger.png';
    this.inputStates[fieldName].valid = false;
    this.addCssClass(inputField, 'wrong-input');
    this.removeCssClass(inputField, 'correct-input');
  }


  /**
   * Set the Inputfield to correct
   * 
   * @param inputField ElementRef
   * @param fieldName String
   */
  checkInputValueCorrect(inputField: HTMLInputElement | HTMLTextAreaElement, fieldName: string){
    this.inputStates[fieldName].iconSrc = '../../assets/img/correct.png';
    this.inputStates[fieldName].valid = true;
    this.removeCssClass(inputField, 'wrong-input');
    this.addCssClass(inputField, 'correct-input');
  }


  /**
   * show that a messagefield when it was succsessfully 
   * 
   */
  massegeSuccsess() {
    this.removeCssClass(this.messageSuccessfully.nativeElement, 'd-none');
    setTimeout(() => {
      this.addCssClass(this.messageSuccessfully.nativeElement, 'd-none');
    }, 2000);
  }


  /**
   * Add a new CSS class
   * 
   * @param element ElementRef
   * @param className string
   */
  private addCssClass(element: HTMLElement, className: string) {
    this.renderer.addClass(element, className);
  }


  /**
   * remove the CSS class
   * 
   * @param element ElementRef
   * @param className string
   */
  private removeCssClass(element: HTMLElement, className: string) {
    this.renderer.removeClass(element, className);
  }
}
