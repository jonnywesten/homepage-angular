import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private ls: LanguageService,
              private http: HttpClient) {
  }

  public name: string;
  public email: string;
  public message: string;

  public errorMsg: string;
  public sent = false;

  public text = this.ls.data.contact;

  ngOnInit() {
  }

  submit() {

    this.errorMsg = '';

    if (!this.name || !this.email || !this.message) {
      this.errorMsg = 'Please enter your name, email and message';
    } else if (!this.validateEmail(this.email)) {
      this.errorMsg = 'Please enter a valid email address';
    } else {

      this.http.post('./mail/contact_me.php', {
        name: this.name,
        email: this.email,
        message: this.message
      })
        .toPromise()
        .then(() => {
          this.sent = true;
        })
        .catch(() => {
          this.errorMsg = 'There was an error submitting the form. Please try again later.';
        });
    }
  }

  validateEmail(email): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
