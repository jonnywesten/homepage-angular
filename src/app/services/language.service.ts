import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReplaySubject} from 'rxjs';
import {environment} from '../../environments/environment';

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
  private firstLoad = true;

  private load() {

    document.getElementById('loading-overlay').style.opacity = '1';

    if (!this.cache[this.selectedLanguage]) {
      this.http.get(environment.backendUrl + '/lang/' + this.selectedLanguage + '.json')
        .toPromise()
        .then(res => {
          this.cache[this.selectedLanguage] = res;
          this.emitChange(res);
          this.firstLoad = false;
        });
    } else {
      this.emitChange(this.cache[this.selectedLanguage]);
    }
  }

  private emitChange(val) {
    setTimeout(() => {
      this.sub.next(val);
    }, this.firstLoad ? 0 : 500);
  }

  public getLanguage() {
    switch (this.selectedLanguage) {
      case 'en':
        return 'English';
      case'de':
        return 'Deutsch';
    }
  }

  public setLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.load();
  }

}
