import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, ReplaySubject, Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) {
    this.load();
  }

  public selectedLanguage = 'en';
  public sub = new ReplaySubject<any>(1);
  private cache = {};

  private load() {

    if (!this.cache[this.selectedLanguage]) {
      this.http.get('https://code-smart.com/content/' + this.selectedLanguage + '.json')
        .toPromise()
        .then(res => {
          this.cache[this.selectedLanguage] = res;
          this.sub.next(res);
        });
    } else {
      this.sub.next(this.cache[this.selectedLanguage]);
    }
  }

  public getSelectedLanguage() {
    switch (this.selectedLanguage) {
      case 'en':
        return 'English';
      case'de':
        return 'Deutsch';
    }
  }

  public setSelectedLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.load();
  }

}
