import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LanguageService} from '../../services/language.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private ls: LanguageService,
              private http: HttpClient,
              private bsModalRef: BsModalRef,
              private modalService: BsModalService) {
  }

  public name: string;
  public email: string;
  public message: string;
  public agreed: boolean;

  public errorMsg: string;
  public sent = false;

  public text;
  private privacyText;
  private requestPending = false;

  ngOnInit() {
    this.ls.sub.subscribe((res: any) => {
      this.text = res.contact;
      this.privacyText = res.privacy;
    });
  }

  submit() {

    this.errorMsg = this.validate();

    if (this.errorMsg.length === 0 && !this.requestPending) {

      this.requestPending = true;

      this.http
        .post('https://s3.code-smart.com/mail/contact_me.php', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        .toPromise()
        .then(() => {
          this.sent = true;
        })
        .catch(() => {
          this.errorMsg = this.text.errorHttp;
        })
        .finally(() => {
          this.requestPending = false;
        });
    }
  }

  openPrivacyModal(e: Event) {
    e.preventDefault();
    this.bsModalRef = this.modalService.show(ModalComponent, {
      initialState: {
        text: this.privacyText
      }
    });
  }

  validate(): string {

    let err = '';

    if (!this.name || !this.email || !this.message) {
      err = this.text.error;
    } else if (!this.validateEmail(this.email)) {
      err = this.text.errorEmail;
    }
    if (!this.agreed) {
      err += '<br>' + this.text.errorPrivacy;
    }

    return err;
  }

  validateEmail(email): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
